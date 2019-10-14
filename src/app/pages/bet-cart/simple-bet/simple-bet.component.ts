import {Component, OnInit} from '@angular/core';
import {BetsService} from '../bets.service';
import {Game} from '../../games/game.model';
import {MatSnackBar} from '@angular/material';
import {MenuService} from '../../../theme/components/menu/menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-simple-bet',
  templateUrl: './simple-bet.component.html',
  styleUrls: ['./simple-bet.component.scss']
})
export class SimpleBetComponent implements OnInit {
  loadingSavedBet: boolean;
  constructor(private betService : BetsService,
              public notifications: MatSnackBar,
              private menuService : MenuService,
              private router : Router) { }
  games : Game[] = [];

  ngOnInit() {
  }

  getPotentialGains(){
    let amount = 0;
    this.betService.getBets().forEach((value : Game) => {
      if(value.amount > 0){
        if(value.choice === 'A'){
          amount = amount + value.amount*value.oddA;
        }else if(value.choice === 'B'){
          amount = amount + value.amount*value.oddB;
        }else if(value.choice === 'N'){
          amount = amount + value.amount*value.oddN;
        }
      }
    });
    return amount;
  }

  getTotalAmount(){
    let amount = 0;
    this.betService.getBets().forEach((value : Game) => {
      if(value.amount > 0){
        amount = amount + value.amount
      }
    });
    return amount;

  }

  getBets(): Game[]{
    return this.betService.getBets();
  }

  deleteAllBets(){
    this.betService.deleteAllBets();
    this.menuService.setBadgeNumberTo(0);
  }

  delete(bet: Game) {
      this.betService.removeBetFromCart(bet);
      this.menuService.decreaseBadgeForMenuBets();
      this.notifications.open('Pari supprimé', null, {duration: 2000,});
  }

  onSubmitBet() {
    this.loadingSavedBet = true;
    this.betService.addBets(this.betService.getBets(),null).subscribe((userId:number) => {
      console.log('Bet saved for user '+  userId);
      this.notifications.open('Pari sauvegardé avec success', null, {duration: 2000,});
      this.loadingSavedBet = true;
      this.deleteAllBets();
      this.router.navigate(["/bet", userId]);
    })
  }
}
