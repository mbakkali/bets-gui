import {Component, OnInit} from '@angular/core';
import {FullBet} from '../fullbet.model';
import {ActivatedRoute} from '@angular/router';
import {BetsService} from '../bets.service';

@Component({
    selector: 'app-bet',
    templateUrl: './bet.component.html',
    styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {
    userId: number;
    input;
    isSearching: boolean;
    displayErrorSearch: boolean;

    constructor(private route: ActivatedRoute, private betsService: BetsService) {
    }

    bets: FullBet[];
    loadingBets: boolean = false;

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            if (params.id && +params.id > 0) {
                this.input = +params.id
               this.searchBetOwner()
            } else if (params.id && +params.id == 0) {
                this.bets = null;
                this.userId = null;
            }
        });
    }


    searchBetOwner() {
        this.isSearching = true;
        this.displayErrorSearch = false;
        this.bets = null;
        this.userId = null;
        if(this.input > 0){
            this.betsService
                .getBetByUser(this.input)
                .subscribe((fullBets: FullBet[]) => {
                    this.userId = +this.input;
                    this.bets = fullBets;
                    this.isSearching = false;
                    console.log('Retrieved bets for owner ', this.bets);
                },error => {
                    this.displayErrorSearch = true;
                    this.isSearching = false;
                });
        }else {
            this.displayErrorSearch = true;
            this.isSearching = false;
        }



    }

}
