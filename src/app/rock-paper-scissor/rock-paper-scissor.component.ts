import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissor',
  templateUrl: './rock-paper-scissor.component.html',
  styleUrls: ['./rock-paper-scissor.component.css']
})
export class RockPaperScissorComponent implements OnInit {
  public computerScore: number = 0;
  public playerScore: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  computeWin(computer, player) {

  }

  computeLose(computer, player) {

  }

  computeTie(computer, player) {

  }

  reset() {
    this.computerScore = 0;
    this.playerScore = 0;
  }

}
