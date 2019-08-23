import {Component, Input, OnInit} from '@angular/core';
import {BetsService} from '../bets.service';
import {Game} from '../../games/game.model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-simple-bet',
  templateUrl: './simple-bet.component.html',
  styleUrls: ['./simple-bet.component.scss']
})
export class SimpleBetComponent implements OnInit {
  constructor(private betService : BetsService,public notifications: MatSnackBar,) { }
  games : Game[] = [];

  ngOnInit() {
  }

  getBets(){
    return this.betService.getBets();
  }

  delete(bet: Game) {
    if(this.betService.removeBetFromCart(bet)){
      this.notifications.open('Pari supprimé', null, {duration: 2000,});
    }else {
      this.notifications.open('Erreur lors de la suppression du Pari', null, {duration: 2000,});

    }

  }
}
