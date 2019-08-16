import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatSlideToggleChange, MatSnackBar} from '@angular/material';
import {AppSettings} from '../../app.settings';
import {Settings} from '../../app.settings.model';
import {Game} from './game.model';
import {GamesService} from './games.service';
import {GameDialogComponent} from './user-dialog/game-dialog.component';
import * as moment from 'moment';

@Component({
    selector: 'app-users',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [GamesService]
})
export class GamesComponent implements OnInit {
    public games: Game[];
    public searchText: string;
    public page: any;
    public settings: Settings;
    toggleNChecked = [];

    constructor(public appSettings: AppSettings,
                public dialog: MatDialog,
                public usersService: GamesService,
                public notifications: MatSnackBar) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getUsers();
    }

    public getUsers(): void {
        this.games = null; //for show spinner each time
        this.usersService.getUsers().subscribe(games => {
            console.log('Loaded games', games);
            this.games = games;
        });
    }

    public addUser(user: Game) {
        this.usersService.addUser(user).subscribe((user: Game) => {
            console.log('Saved game', user);
            this.notifications.open('Nouveau match ' + user.teamA + '/' + user.teamB + ' ajouté', null, {duration: 2000,});
            this.getUsers();
        });
    }

    public updateUser(user: Game) {
        this.usersService.updateUser(user).subscribe((user: Game) => {
            console.log('Modifed game', user);
            this.notifications.open('Match ' + user.teamA + '/' + user.teamB + ' modifié', null, {duration: 2000,});
            this.getUsers();
        });
    }

    public deleteUser(user: Game) {
        this.usersService.deleteUser(user.id).subscribe(() => {
            console.log('Modifed game', user);
            this.notifications.open('Match ' + user.teamA + '/' + user.teamB + ' supprimé', null, {duration: 2000,});
            this.getUsers();
        });
    }


    public onPageChanged(event) {
        this.page = event;
        this.getUsers();
        if (this.settings.fixedHeader) {
            document.getElementById('main-content').scrollTop = 0;
        }
        else {
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }

    public openNewGameDialog(user) {
        let dialogRef = this.dialog.open(GameDialogComponent, {
            data: user
        });

        dialogRef.afterClosed().subscribe(game => {
            if (game) {
                let date: Date = game.date;
                date.setHours(+game.time.split(':')[0]);
                date.setMinutes(+game.time.split(':')[1]);
                let datetime = moment(date).format('YYYY-MM-DDTHH:mm:00.000');
                game.datetime = datetime;
                (game.id) ? this.updateUser(game) : this.addUser(game);
            }
        });
    }

    isGameBlocked(game: Game) {
        return false;
    }

    onChange($event: MatSlideToggleChange) {
        this.toggleNChecked
        this.games
    }
}
