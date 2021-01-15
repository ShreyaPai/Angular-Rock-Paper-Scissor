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
  constructor() { }

  ngOnInit(): void {
  }

  public pick(userSelect: string) {
    if (this.computerScore === 5 || this.playerScore === 5) {
      this.checkResult();
      setTimeout(() => this.reset(), 3000)
    }
    this.count++;
    this.userChoice = userSelect;
    console.log('userChoice :>> ', this.userChoice);
    setTimeout(() => {
      const computerSelect = Math.floor(Math.random() * 3);
      this.computerChoice = this.weapons[computerSelect]
      console.log('computerChoice :>> ', this.computerChoice);
      this.computeWin(this.userChoice, this.computerChoice);
    }, 200);
  }

  computeWin(computer, player) {
    switch (computer + player) {
      case 'rockscissor':
      case 'scrissorpaper':
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
    if (this.computerScore === 5) {
      this.showWinner = 'Sorry, You Lose!'
    } else {
      this.showWinner = 'Yay! You Won!'
    }
  }

  reset() {
    this.computerChoice = '';
    this.userChoice = '';
    this.computerScore = 0;
    this.playerScore = 0;
    this.showButton = true
  }

  public startOver() {
    this.reset();
    this.showButton = false;
    this.showWinner = '';
  }

}
