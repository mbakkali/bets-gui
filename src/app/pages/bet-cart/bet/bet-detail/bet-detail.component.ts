import {Component, Input, OnInit} from '@angular/core';
import {FullBet} from '../../fullbet.model';
import {BetsService} from '../../bets.service';

@Component({
  selector: 'app-bet-detail',
  templateUrl: './bet-detail.component.html',
  styleUrls: ['./bet-detail.component.scss']
})
export class BetDetailComponent implements OnInit {

  @Input() bets : FullBet[];
  @Input() userId : number;
  @Input() showIcon: boolean;
  constructor(private betsServixe : BetsService) { }

  ngOnInit() {
  }

  deleteBet() {
  }


}
