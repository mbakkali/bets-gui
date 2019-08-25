import { Component, OnInit } from '@angular/core';
import {BetsService} from './bets.service';

@Component({
  selector: 'app-cart',
  templateUrl: './bet-cart.component.html',
  styleUrls: ['./bet-cart.component.scss']
})
export class BetCartComponent implements OnInit {

  constructor(private betsService : BetsService) { }

  ngOnInit() {
  }

  showBets():boolean {
    return this.betsService.getBets().length > 0;
  }
}
