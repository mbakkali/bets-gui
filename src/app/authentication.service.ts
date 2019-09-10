import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from './shared/user.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public url = environment.url;
    public authChanged = new EventEmitter();

    constructor(
        private httpClient: HttpClient
    ) {
    }

    authenticate(username, password) {
        console.log(username);
        console.log(password);
        return this.httpClient.get<User>(this.url + 'validateLogin/' + btoa(username + ':' + password)).pipe(
            map(
                userData => {
                    if (userData.status == 'OK') {
                        sessionStorage.setItem('username', username);
                        let authString = 'Basic ' + btoa(username + ':' + password);
                        sessionStorage.setItem('basicauth', authString);
                        sessionStorage.setItem('role', userData.role);
                        this.authChanged.emit();
                        return userData;
                    } else {
                        return userData;
                    }

                }
            )
        );
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        console.log(!(user === null));
        return !(user === null);
    }


    isUserAdmin():boolean {
        let role = sessionStorage.getItem('role');
        return role != null && role == "ADMIN";
    }

    getUserRole():string {
        let role = sessionStorage.getItem('role');
        if(role != null){
            return role;
        }else {
            return "NO_ROLE"
        }
    }

    getUserName():string {
        let username = sessionStorage.getItem('username');
        if(username != null){
            return username;
        }
    }

    logOut() {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('basicauth');
        sessionStorage.removeItem('role');
        this.authChanged.emit();
    }

}