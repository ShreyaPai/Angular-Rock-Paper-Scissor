import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-announce-winner',
  templateUrl: './announce-winner.component.html',
  styleUrls: ['./announce-winner.component.css']
})
export class AnnounceWinnerComponent implements OnInit {
  @Input() public showWinner = '';
  @Input() public showResetButton = false;
  @Output() startOver: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  public reset() {
    this.startOver.emit(true);
  }

}
