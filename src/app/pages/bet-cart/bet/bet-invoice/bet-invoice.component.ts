import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../games/game.model';
import {FullBet} from '../../fullbet.model';

@Component({
  selector: 'app-bet-invoice',
  templateUrl: './bet-invoice.component.html'})
export class BetInvoiceComponent implements OnInit {

  @Input() bets : FullBet[];
  @Input() invoidId : number;
  constructor() { }

  ngOnInit() {
  }

  totalAmount() {
    if(this.bets){
      let amount = 0;
      this.bets.forEach((value : FullBet) => {
        if(value.amount > 0){
          amount = amount + value.amount
        }
      });
      return amount;
    }

  }
}
