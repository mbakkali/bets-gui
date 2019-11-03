import {Component, Inject, OnInit} from '@angular/core';
import {BetsService} from "../bet-cart/bets.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FullBet} from "../bet-cart/fullbet.model";

@Component({
    selector: 'app-bet-board',
    templateUrl: './bet-board.component.html',
    styleUrls: ['./bet-board.component.scss']
})
export class BetBoardComponent implements OnInit {
    ngOnInit() {
    }

    displayedColumns: string[];

    dataSource = [];

    groupingColumn = 'ownerId';

    reducedGroups = [];

    initialData: any [];

    bets;

    constructor(private betsService: BetsService,
                private router: Router,
                private dialog: MatDialog,
                private notifications: MatSnackBar) {

        // Replace people with any dataArray !
        this.getBets();


    }

    getBets() {
        this.bets = null;
        this.betsService.getAllBets().subscribe((fullBets: FullBet[]) => {
            this.bets = fullBets;
            let inputData = this.bets;
            if (!this.initData(inputData)) return;
            this.buildDataSource();
            this.dataSource.forEach(value => this.reduceGroup(value))

        });
    }

    /**
     * Discovers columns in the data
     */
    initData(data) {
        if (!data) return false;
        this.displayedColumns = ['teamA', 'teamB', 'oddA', 'oddB', 'oddN', 'betChoice', 'gametime', 'amount'];
        this.initialData = this.bets;
        return true;
    }

    /**
     * Rebuilds the datasource after any change to the criterions
     */
    buildDataSource() {
        this.dataSource = this.groupBy(this.groupingColumn, this.initialData, this.reducedGroups);
    }

    /**
     * Groups the @param data by distinct values of a @param column
     * This adds group lines to the dataSource
     * @param reducedGroups is used localy to keep track of the colapsed groups
     */
    groupBy(column: string, data: any[], reducedGroups?: any[]) {
        if (!column) return data;
        let collapsedGroups = reducedGroups;
        if (!reducedGroups) collapsedGroups = [];
        const customReducer = (accumulator, currentValue) => {
            let currentGroup = currentValue[column];
            if (!accumulator[currentGroup])
                accumulator[currentGroup] = [{
                    groupName: `${column} ${currentValue[column]}`,
                    value: currentValue[column],
                    savedtime: data.filter(value => value.ownerId == currentValue[column])[0].savedtime,
                    object: data.filter(value => value.ownerId == currentValue[column]),
                    isGroup: true,
                    reduced: collapsedGroups.some((group) => group.value == currentValue[column])
                }];
            accumulator[currentGroup].push(currentValue);
            return accumulator;
        }
        let groups = data.reduce(customReducer, {});
        let groupArray = Object.keys(groups).map(key => groups[key]).sort((n1, n2) => new Date(n2[0].savedtime).getTime() - new Date(n1[0].savedtime).getTime());
        let flatList = groupArray.reduce((a, c) => {
            return a.concat(c);
        }, []);

        return flatList.filter((rawLine) => {
            return rawLine.isGroup ||
                collapsedGroups.every((group) => rawLine[column] != group.value);
        });
    }

    /**
     * Since groups are on the same level as the data,
     * this function is used by @input(matRowDefWhen)
     */
    isGroup(index, item): boolean {
        return item.isGroup;
    }

    /**
     * Used in the view to collapse a group
     * Effectively removing it from the displayed datasource
     */
    reduceGroup(row) {
        row.reduced = !row.reduced;
        if (row.reduced)
            this.reducedGroups.push(row);
        else
            this.reducedGroups = this.reducedGroups.filter((el) => el.value != row.value);

        this.buildDataSource();
    }

    stringify(group: any) {
        return JSON.stringify(group);
    }

    onDeleteBet(id) {
        let concernedBets: FullBet[] = this.bets.filter((fullBet: FullBet) => {
            return fullBet.ownerId == id;
        });
        let dialogRef = this.dialog.open(BetBoardDeleteDialog, {
            data: {subBets: concernedBets, id: id}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == true) {
                this.betsService.deleteOwnerBets(id).subscribe(() => {
                    this.notifications.open('Paris ' + id + ' supprimé', null, {duration: 2000,});
                    this.getBets();
                }, error => {
                    this.notifications.open('Problème lors de la suppression du pari', null, {duration: 2000,});
                })
            }
        });
    }

    onViewBet(id) {
        this.router.navigate(['bet/' + id + '/' + false]);
    }


    isToday(savedtime: string) {
        let dateToCheck = new Date(savedtime)
        const today = new Date()
        return dateToCheck.getDate() == today.getDate() &&
            dateToCheck.getMonth() == today.getMonth() &&
            dateToCheck.getFullYear() == today.getFullYear()
    }

    applyFilter(value: any) {
        if(value && value != ""){
            let filteredData = this.initialData.filter(data => data.ownerId == value);
            this.dataSource = this.groupBy(this.groupingColumn, filteredData, this.reducedGroups);
        }else {
            this.buildDataSource()
        }
    }
}

@Component({
    selector: 'bet-board-delete-dialog',
    templateUrl: 'bet-board-delete-dialog.html',
})
export class BetBoardDeleteDialog {

    constructor(
        public dialogRef: MatDialogRef<BetBoardDeleteDialog>,
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
