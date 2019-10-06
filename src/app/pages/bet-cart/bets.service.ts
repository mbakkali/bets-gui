import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Game} from '../games/game.model';
import {FullBet} from './fullbet.model';
import {Statistic} from '../games/statistic.model';
import {MenuService} from "../../theme/components/menu/menu.service";

@Injectable()
export class BetsService {
    public url = environment.url;

    constructor(public http:HttpClient) {
    }

    games : Map<number,Game> = new Map<number, Game>();

    getBets(){
       return Array.from(this.games.values()).filter((value: Game) => value.checked == true);
    }

    addToBetCart(game: Game){
        console.log("addToBetCart");
    }

    getAllBets(){
        return this.http.get<FullBet[]>(this.url + 'bets');
    }

    removeBetFromCart(game : Game){
        console.log("removeBetFromCart");
        this.games.get(game.id).checked = false;
        this.games.get(game.id).choice = null;

    }

    getStatistics(){
        return this.http.get<Statistic>(this.url + 'stats');
    }

    deleteAllBets() {
        this.games.forEach((value, key, map) => {
            if(value.checked == true){
                value.checked = false;
                value.choice = null;
            }
        });
    }

    getBetByUser(userId : number){
        return this.http.get<FullBet[]>(this.url +'bets/info/' + userId);
    }

    addBets(games:Game[]){
        let bets = [];
        games.forEach((game:Game) => {
            if(game.amount > 0 && game.choice != null && game.id != null){
                bets.push({
                    amount : game.amount,
                    betChoice : game.choice,
                    gameId : game.id
                });
            }
        });
        return this.http.post(this.url +'bets', bets);

    }

    getGames() :Game[]{
        return Array.from(this.games.values());
    }

    loadGames() {
        return this.http.get<Game[]>(this.url + 'games');
    }

    addGame(user:Game){
        return this.http.post(this.url +'games', user);
    }

    updateGame(user:Game){
        return this.http.post(this.url+'games', user );
    }

    deleteGame(id: number) {
        return this.http.delete(this.url + "games/delete/" + id);
    }

    deleteOwnerBets(id: number) {
        return this.http.delete(this.url + "bets/delete/user/" + id);
    }


}
