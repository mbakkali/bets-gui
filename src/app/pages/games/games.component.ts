import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatSlideToggleChange, MatSnackBar} from '@angular/material';
import {AppSettings} from '../../app.settings';
import {Settings} from '../../app.settings.model';
import {Game} from './game.model';
import {GameDialogComponent} from './user-dialog/game-dialog.component';
import * as moment from 'moment';
import {MenuService} from '../../theme/components/menu/menu.service';
import {BetsService} from '../bet-cart/bets.service';
import {AuthenticationService} from '../../authentication.service';

@Component({
    selector: 'app-users',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
    encapsulation: ViewEncapsulation.None})
export class GamesComponent implements OnInit {
    public games: Game[];
    public searchText: string = "";
    public page: any;
    public settings: Settings;
    showPassedGames = false;

    constructor(public appSettings: AppSettings,
                public dialog: MatDialog,
                public notifications: MatSnackBar,
                private menuService : MenuService,
                private betService : BetsService,
                private authService : AuthenticationService) {
        this.settings = this.appSettings.settings;
    }

    isUserAdmin(){
        return this.authService.isUserAdmin();
    }

    ngOnInit() {

        this.getGames();
    }

    public filteredGames(): Game[]{
        if(this.games){
            let filtered = [];
            if(this.showPassedGames){
                filtered = this.games;
            }else {
                filtered = this.games.filter(game => !this.isGameEnded(game))
            }
            return filtered;
        }
    }

    public getGames(): void {
        this.games = null; //for show spinner each time
        this.betService.loadGames().subscribe( games => {
            games.forEach(value => {
                if(!this.betService.games.has(value.id)){
                    this.betService.games.set(value.id,value);
                }
            });
            this.games = this.betService.getGames();
        },error => alert("Serveur indisponible"));
    }

    public addGame(user: Game) {
        this.betService.addGame(user).subscribe((user: Game) => {
            console.log('Saved game', user);
            this.notifications.open('Nouveau match ' + user.teamA + '/' + user.teamB + ' ajouté', null, {duration: 2000,});
            this.getGames();
        });
    }

    public updateGame(user: Game) {
        this.betService.updateGame(user).subscribe((modifiedGame: Game) => {
            console.log('Modifed game', modifiedGame);
            this.notifications.open('Match ' + modifiedGame.teamA + '/' + modifiedGame.teamB + ' modifié', null, {duration: 2000,});
            this.betService.games.forEach(value => {
                if(this.betService.games.has(modifiedGame.id)){
                    this.betService.games.set(modifiedGame.id,modifiedGame);
                }
            });
            this.games = this.betService.getGames();

        });
    }

    public deleteGame(user: Game) {
        this.betService.deleteGame(user.id).subscribe(() => {
            console.log('Modifed game', user);
            this.notifications.open('Match ' + user.teamA + '/' + user.teamB + ' supprimé', null, {duration: 2000,});
            this.betService.games.forEach(value => {
                if(this.betService.games.has(value.id)){
                    this.betService.games.delete(user.id);
                }
            });
            this.games = this.betService.getGames();
        });
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
                game.datetime = moment(date).format('YYYY-MM-DDTHH:mm:00.000');
                (game.id) ? this.updateGame(game) : this.addGame(game);
            }
        });
    }

    isGameBlocked(game: Game) {
        let timeToNow = new Date(game.datetime).getTime() - new Date().getTime()
        return timeToNow >= 0 && timeToNow < 5 * 60 * 1000;
    }

    isGameEnded(game: Game) {
        let timeToNow = new Date(game.datetime).getTime() - new Date().getTime()
        return timeToNow < 0;
    }


    onAChange(currentGame:Game) {
        //Deactivated A
        if(currentGame.checked && currentGame.choice ==='A') {
            currentGame.choice = null;
            currentGame.checked = false;
            currentGame.amount = null;
            this.betService.removeBetFromCart(currentGame);
            this.notifications.open("Pari sur " + currentGame.teamA + " ("+currentGame.oddA +") retiré",null,{duration: 2000,});
            this.menuService.decreaseBadgeForMenuBets();
            //Activated A
        }else {
            currentGame.choice = 'A';
            currentGame.checked = true;
            currentGame.amount = 10;
            this.notifications.open("Pari sur " + currentGame.teamA + " ("+currentGame.oddA +") ajouté",null,{duration: 2000,});
            this.menuService.increaseBadgeForMenuBets();
        }
    }

    onBChange(currentGame:Game) {
        //Deactivated A
        if(currentGame.checked && currentGame.choice ==='B') {
            currentGame.choice = null;
            currentGame.checked = false;
            currentGame.amount = null;
            this.betService.removeBetFromCart(currentGame);
            this.notifications.open("Pari sur " + currentGame.teamB + " ("+currentGame.oddB +") retiré",null,{duration: 2000,});
            this.menuService.decreaseBadgeForMenuBets();
            //Activated A
        }else {
            currentGame.choice = 'B';
            currentGame.checked = true;
            currentGame.amount = 10;
            this.notifications.open("Pari sur " + currentGame.teamB + " ("+currentGame.oddB +") ajouté",null,{duration: 2000,});
            this.menuService.increaseBadgeForMenuBets();
        }
    }

    onNChange(currentGame:Game) {
        //Deactivated A
        if(currentGame.checked && currentGame.choice ==='N') {
            currentGame.choice = null;
            currentGame.checked = false;
            currentGame.amount = null;
            this.betService.removeBetFromCart(currentGame);
            this.notifications.open("Pari sur match nul" + " ("+currentGame.oddN +") retiré",null,{duration: 2000,});
            this.menuService.decreaseBadgeForMenuBets();
            //Activated A
        }else {
            currentGame.choice = 'N';
            currentGame.checked = true;
            currentGame.amount = 10;
            this.notifications.open("Pari sur match nul" + " ("+currentGame.oddN +") ajouté",null,{duration: 2000,});
            this.menuService.increaseBadgeForMenuBets();
        }
    }

}
