import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatSlideToggleChange, MatSnackBar} from '@angular/material';
import {AppSettings} from '../../app.settings';
import {Settings} from '../../app.settings.model';
import {Game} from './game.model';
import {GamesService} from './games.service';
import {GameDialogComponent} from './user-dialog/game-dialog.component';
import * as moment from 'moment';
import {MenuService} from '../../theme/components/menu/menu.service';
import {BetsService} from '../bet-cart/bets.service';

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
    toggleAChecked = [];
    toggleBChecked = [];

    constructor(public appSettings: AppSettings,
                public dialog: MatDialog,
                public usersService: GamesService,
                public notifications: MatSnackBar,
                private menuService : MenuService,
                private betService : BetsService) {
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


    onAChange($event: MatSlideToggleChange) {
        let gameId = +$event.source.id.split("_")[0];
        let pos = $event.source.id.split("_")[1];
        let currentGame = this.games.find(x => x.id == gameId);

        //Activated A
        if(this.toggleAChecked[pos] == true) {
            if (this.toggleBChecked[pos] == true) {
                this.toggleBChecked[pos] = false;
                this.notifications.open("Pari sur " + currentGame.teamA + " ("+currentGame.oddA +") modifiée",null,{duration: 2000,});
            } else if (this.toggleNChecked[pos] != undefined && this.toggleNChecked[pos] == true) {
                this.toggleNChecked[pos] = false;
                this.notifications.open("Pari sur match nul modifié",null,{duration: 2000,});
            } else {
                this.notifications.open("Pari sur " + currentGame.teamA + " ("+currentGame.oddA +") ajouté",null,{duration: 2000,});
                this.menuService.increaseBadgeForMenuBets();
            }
        //Deactivated A
        }else {
            this.notifications.open("Pari sur " + currentGame.teamA + " ("+currentGame.oddA +") retiré",null,{duration: 2000,});
            this.menuService.decreaseBadgeForMenuBets();
        }
    }

    onBChange($event: MatSlideToggleChange) {
        let gameId = +$event.source.id.split("_")[0];
        let pos = $event.source.id.split("_")[1];
        let currentGame = this.games.find(x => x.id == gameId);

        //Activated B
        if(this.toggleBChecked[pos] == true) {
            if (this.toggleAChecked[pos] == true) {
                this.toggleAChecked[pos] = false;
                this.notifications.open("Pari sur " + currentGame.teamA + " ("+currentGame.oddA +") modifié",null,{duration: 2000,});
            } else if (this.toggleNChecked[pos] != undefined && this.toggleNChecked[pos] == true) {
                this.toggleNChecked[pos] = false;
                this.notifications.open("Pari sur match nul modifié ",null,{duration: 2000,});
            } else {
                this.notifications.open("Pari sur " + currentGame.teamB + " ("+currentGame.oddB +") ajouté",null,{duration: 2000,});
                this.menuService.increaseBadgeForMenuBets();
            }
            this.betService.addToBetCart(currentGame,"B")
            //Deactivated A
        }else {
            this.notifications.open("Pari sur " + currentGame.teamB + " ("+currentGame.oddB +") retiré",null,{duration: 2000,});
            this.menuService.decreaseBadgeForMenuBets();
            this.betService.removeBetFromCart(currentGame)

        }
    }

    onNChange($event: MatSlideToggleChange) {
        let gameId = +$event.source.id.split("_")[0];
        let pos = $event.source.id.split("_")[1];
        let currentGame = this.games.find(x => x.id == gameId);

        //Activated N
        if(this.toggleNChecked[pos] == true) {
            if (this.toggleAChecked[pos] == true) {
                this.toggleAChecked[pos] = false;
                this.notifications.open("Pari sur " + currentGame.teamA + " ("+currentGame.oddA +") modifié. Nouveau pari sur match nul",null,{duration: 2000,});
            } else if (this.toggleBChecked[pos] == true) {
                this.toggleBChecked[pos] = false;
                this.notifications.open("Pari sur " + currentGame.teamB + " ("+currentGame.oddB +") modifié. Nouveau pari sur match nul",null,{duration: 2000,});
            } else {
                this.notifications.open("Pari sur match nul ("+currentGame.oddN +") ajouté",null,{duration: 2000,});
                this.menuService.increaseBadgeForMenuBets();
            }
            //Deactivated A
        }else {
            this.notifications.open("Pari sur sur match nul ("+currentGame.oddN +") retiré",null,{duration: 2000,});
            this.menuService.decreaseBadgeForMenuBets();
        }
    }
}
