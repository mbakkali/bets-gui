import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './game.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class GamesService {
    public url = environment.url;
    constructor(public http:HttpClient) { }
    
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
