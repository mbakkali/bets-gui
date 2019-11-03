import { Component, OnInit } from '@angular/core';
import {BetsService} from "../bets.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MenuService} from "../../../theme/components/menu/menu.service";
import {Router} from "@angular/router";
import {Game} from "../../games/game.model";

@Component({
  selector: 'app-combined-bet',
  templateUrl: './combined-bet.component.html',
  styleUrls: ['./combined-bet.component.scss']
})
export class CombinedBetComponent implements OnInit {

  loadingSavedBet: boolean;
  combinedAmount : boolean;
  constructor(private betService : BetsService,
              public notifications: MatSnackBar,
              private menuService : MenuService,
              private router : Router) { }
  games : Game[] = [];

  ngOnInit() {
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
    this.betService.addBets(this.betService.getBets(),this.combinedAmount).subscribe((userId:number) => {
      console.log('Bet saved for user '+  userId);
      this.notifications.open('Pari sauvegardé avec success', null, {duration: 2000,});
      this.loadingSavedBet = true;
      this.deleteAllBets();
      this.router.navigate(['bet/' + userId + '/' + true]);
    })
  }
}
