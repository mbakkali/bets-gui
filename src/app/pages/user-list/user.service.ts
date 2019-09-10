import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {Statistic} from '../games/statistic.model';
import {User} from './user.model';

@Injectable()
export class UserService {
    public url = environment.url;
    constructor(public http:HttpClient) { }


    loadUsers() {
        return this.http.get<User[]>(this.url + 'users');
    }

    addUser(user:User){
        return this.http.post(this.url +'users', user);
    }

    updateUser(user:User){
        return this.http.post(this.url+'users', user );
    }

    deleteUser(id: string) {
        return this.http.delete(this.url + "users/" + id);
    }

}
