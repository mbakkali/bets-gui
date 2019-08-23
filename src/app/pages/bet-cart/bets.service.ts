import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {Game} from '../games/game.model';

@Injectable()
export class BetsService {
    public url = environment.url;
    constructor(public http:HttpClient) { }

    bets : Map<number,{game : Game,choice :string}> = new Map<number, {game: Game, choice: string}>();

    getBets(){
       return Array.from(this.bets.values()).map(value => value.game)
    }

    addToBetCart(game: Game, choice: string, pos: number){
        console.log("addToBetCart");
        this.bets.set(pos,{game : game, choice : choice});
        console.log(this.bets);
    }

    removeBetFromCart(game : Game):boolean{
        console.log("removeBetFromCart");
        let indexToDelete:number;
        this.bets.forEach((value, key, map) => {
            if(value.game.id === game.id){
                indexToDelete = key;
            }
        });
        if(indexToDelete != null ){
            console.log(this.bets);
            return this.bets.delete(indexToDelete);
        }else {
            console.log("Can't find index to delete from",game);
            console.log(this.bets);
            return false;
        }
    }

    getUsers(): Observable<Game[]> {
        return this.http.get<Game[]>(this.url + 'games');
    }

    addUser(user:Game){
        return this.http.post(this.url +'games', user);
    }

    updateUser(user:Game){
        return this.http.post(this.url+'games', user );
    }

    deleteUser(id: number) {
        return this.http.delete(this.url + "delete/" + id);
    } 
} 
