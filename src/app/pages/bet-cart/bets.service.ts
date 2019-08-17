import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {Game} from '../games/game.model';

@Injectable()
export class BetsService {
    public url = environment.url;
    constructor(public http:HttpClient) { }

/*
    bets : Map<number,{game : Game,choice :string}> = new Map<number, {game: Game, choice: string}>();
*/

    addToBetCart(game : Game,choice : string){
/*
        this.bets.setValue()
*/
    }

    removeBetFromCart(game : Game){

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
