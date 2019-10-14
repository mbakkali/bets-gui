import {Component, Inject, Input, OnInit} from '@angular/core';
import {FullBet} from '../../fullbet.model';
import {BetsService} from '../../bets.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {BetListDeleteDialog} from '../../../bet-list/bet-list.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-bet-detail',
    templateUrl: './bet-detail.component.html',
    styleUrls: ['./bet-detail.component.scss']
})
export class BetDetailComponent implements OnInit {

    @Input() bets: FullBet[];
    @Input() userId: number;
    @Input() showIcon: boolean;
    showDeletionMessage: boolean = false;
    isDeletingBet: boolean = false;
    @Input() combinedAmount: number;

    constructor(private dialog: MatDialog, private betsService: BetsService, private notifications: MatSnackBar, private router: Router) {
    }

    ngOnInit() {
    }

    deleteBet() {
      this.isDeletingBet = true;
        this.betsService.deleteOwnerBets(this.userId).subscribe(() => {

            this.notifications.open('Paris ' + this.userId + ' supprimé', null, {duration: 2000,});
            this.isDeletingBet = false;
            this.showDeletionMessage = true;
            setTimeout(() => {
                this.showDeletionMessage = false;
                this.router.navigate(['/games']);
            }, 1000);

        });
    }


    openPrintModal() {
        window.print();

        /* let dialogRef = this.dialog.open(PreviewTicketDialog, {
             data: {bets: this.bets, id: this.userId}
         });*/
    }
}


@Component({
    selector: 'preview-ticket-dialog',
    templateUrl: 'preview-ticket-dialog.html',
})
export class PreviewTicketDialog {

    constructor(
        public dialogRef: MatDialogRef<PreviewTicketDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.bets = data.bets;
        this.id = data.id;
    }

    id: number;
    bets: FullBet[];

    onNoClick(): void {
        this.dialogRef.close();
    }

}
