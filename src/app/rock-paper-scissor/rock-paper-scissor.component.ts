import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissor',
  templateUrl: './rock-paper-scissor.component.html',
  styleUrls: ['./rock-paper-scissor.component.css']
})
export class RockPaperScissorComponent implements OnInit {
  public computerScore: number = 0;
  public playerScore: number = 0;
  public userChoice: string;
  public computerChoice: string;
  public disableComputerChoice = true;
  public count = 0;
  public weapons = ['rock', 'paper', 'scissor'];
  public showWinner = '';
  public showButton = false;
  public disableButtons = false;
  constructor() { }

  ngOnInit(): void {
  }

  public pick(userSelect: string) {
    this.count++;
    this.userChoice = userSelect;
    console.log('userChoice :>> ', this.userChoice);
      const computerSelect = Math.floor(Math.random() * 3);
      this.computerChoice = this.weapons[computerSelect]
      console.log('computerChoice :>> ', this.computerChoice);
      this.computeWin(this.computerChoice, this.userChoice);
      if (this.computerScore === 4 || this.playerScore === 4) {
        this.disableButtons = true;
        this.checkResult();
      }
  }

  computeWin(computer, player) {
    switch (computer + player) {
      case 'rockscissor':
      case 'scissorpaper':
      case 'paperrock' : {
        this.computerScore ++;
      }
      break;
      case 'rockpaper':
      case 'paperscissor':
      case 'scissorrock' : {
        this.playerScore ++;
      }
      break;
    }
  }

  public checkResult() {
    if (this.computerScore === 4) {
      this.computerScore++;
      this.showWinner = 'Sorry, You Lose!'
    } else {
      this.playerScore++;
      this.showWinner = 'Yay! You Won!'
    }
    this.showButton = true;
  }

  public startOver() {
    this.computerChoice = '';
    this.userChoice = '';
    this.computerScore = 0;
    this.playerScore = 0;
    this.showButton = false;
    this.showWinner = '';
    this.disableButtons = false;
  }

}
