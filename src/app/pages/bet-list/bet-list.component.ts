import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {BetsService} from '../bet-cart/bets.service';
import {FullBet} from '../bet-cart/fullbet.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {DialogOverviewExampleDialog} from '../ui/dialog/dialog.component';

@Component({
    selector: 'app-bet-list',
    templateUrl: './bet-list.component.html',
    styleUrls: ['./bet-list.component.scss']
})
export class BetListComponent {
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    bets: MatTableDataSource<FullBet>;
    displayedColumns = ['id', 'teamA', 'teamB', 'gametime', 'betChoice', 'odd', 'amount', 'action'];
    input;

    constructor(private betsService: BetsService,
                private router: Router,
                private dialog: MatDialog,
                private notifications: MatSnackBar) {
        this.getBets();
    }

    getBets() {
        this.bets = null;
        this.betsService.getAllBets().subscribe((fullBets: FullBet[]) => {
            this.bets = new MatTableDataSource<FullBet>(fullBets);
            this.bets.sort = this.sort;

        });
    }

    applyFilter(filterValue: string) {
        this.bets.filter = filterValue.trim().toLowerCase();

        if (this.bets.paginator) {
            this.bets.paginator.firstPage();
        }
    }

    onDeleteBet(element: FullBet) {
        let concernedBets: FullBet[] = this.bets.data.filter((fullBet: FullBet) => {
            return fullBet.ownerId == element.ownerId;
        });
        let dialogRef = this.dialog.open(BetListDeleteDialog, {
            data: {subBets: concernedBets, id: element.ownerId}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == true) {
                this.betsService.deleteOwnerBets(element.ownerId).subscribe(() => {
                  this.notifications.open('Paris ' + element.ownerId + ' supprimé', null, {duration: 2000,});
                  this.getBets();
                },error => {
                  this.notifications.open('Problème lors de la suppression du pari', null, {duration: 2000,});
                })
            }
        });
    }

    onViewBet(element: FullBet) {
        this.router.navigate(['bet/' + element.ownerId]);
    }

}


@Component({
    selector: 'bet-list-delete-dialog',
    templateUrl: 'bet-list-delete-dialog.html',
})
export class BetListDeleteDialog {

    constructor(
        public dialogRef: MatDialogRef<BetListDeleteDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.bets = data.subBets;
        this.id = data.id;
    }

    id: number;
    bets: FullBet[];

    onNoClick(): void {
        this.dialogRef.close();
    }

}
