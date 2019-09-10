import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from '../../../authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
    @Output() triggerOptions = new EventEmitter();

    public userImage = '../assets/football.png';

    constructor(private authService: AuthenticationService, private router: Router) {
    }

    ngOnInit() {
    }

    logOut() {
        this.authService.logOut();
        this.router.navigate(['/login']);
    }

    isUserAdmin() {
        return this.authService.isUserAdmin();
    }

    getUserRole() {
        return this.authService.getUserRole();
    }

    getUserName(){
      return this.authService.getUserName();
    }
}
