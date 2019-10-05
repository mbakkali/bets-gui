import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';
import {User} from './pages/user-list/user.model';

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
                    if (userData.username != null) {
                        sessionStorage.setItem('username', username);
                        let authString = 'Basic ' + btoa(username + ':' + password);
                        sessionStorage.setItem('basicauth', authString);
                        sessionStorage.setItem('roles', JSON.stringify(userData.roles));
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
        let roles = sessionStorage.getItem('roles');
        return roles != null && JSON.parse(roles).includes("ROLE_ADMIN");
    }

    getUserRoles():string[] {
        let roles = JSON.parse(sessionStorage.getItem('roles'));
        if(roles != null){
            return roles;
        }else {
            return []
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
        sessionStorage.removeItem('roles');
        this.authChanged.emit();
    }

}