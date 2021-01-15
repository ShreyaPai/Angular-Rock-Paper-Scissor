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
  public weapons = ['rock', 'paper', 'scissor'];
  public showWinner = '';
  public showResetButton = false;
  public disableUserselectButtons = false;
  constructor() { }

  ngOnInit(): void {
  }

  public pick(userSelect: string) {
    this.userChoice = userSelect;
    console.log('userChoice :>> ', this.userChoice);
      const computerSelect = Math.floor(Math.random() * 3);
      this.computerChoice = this.weapons[computerSelect]
      console.log('computerChoice :>> ', this.computerChoice);
      this.computeWin(this.computerChoice, this.userChoice);
      if (this.computerScore === 5 || this.playerScore === 5) {
        this.disableUserselectButtons = true;
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
    if (this.computerScore === 5) {
      // this.computerScore++;
      this.showWinner = 'Sorry, You Lose!'
    } else {
      // this.playerScore++;
      this.showWinner = 'Yay! You Won!'
    }
    this.showResetButton = true;
  }

  public startOver() {
    this.computerChoice = '';
    this.userChoice = '';
    this.computerScore = 0;
    this.playerScore = 0;
    this.showResetButton = false;
    this.showWinner = '';
    this.disableUserselectButtons = false;
  }

}
