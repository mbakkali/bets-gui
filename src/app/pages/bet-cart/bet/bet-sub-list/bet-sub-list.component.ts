import {Component, Input, OnInit} from '@angular/core';
import {FullBet} from '../../fullbet.model';

@Component({
  selector: 'app-bet-sub-list',
  templateUrl: './bet-sub-list.component.html',
  styleUrls: ['./bet-sub-list.component.scss']
})
export class BetSubListComponent implements OnInit {

  @Input() bets :FullBet[]
  constructor() { }

  ngOnInit() {
  }

}
