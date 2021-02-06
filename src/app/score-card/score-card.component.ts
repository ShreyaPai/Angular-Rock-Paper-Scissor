import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {

  @Input() public computerScore: any;
  @Input() public playerScore: any;
  constructor() { }

  ngOnInit(): void {
  }

}
