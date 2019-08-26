import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import {BetsService} from '../bet-cart/bets.service';
import {Statistic} from '../games/statistic.model';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public settings: Settings;

  //DAYS
  public single: any[];
  public multi: any[];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Semaine précédente';
  public showYAxisLabel = true;
  public yAxisLabel = 'Total des mises';
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };


  //TOPGAMES
  public top10_single: any[];
  public top10_multi: any[];
  public top10_showXAxis = true;
  public top10_showYAxis = true;
  public top10_gradient = false;
  public top10_showLegend = false;
  public top10_showXAxisLabel = true;
  public top10_xAxisLabel = 'Mise totale';
  public top10_showYAxisLabel = true;
  public top10_yAxisLabel = 'Matchs';
  public top10_colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };


  statistics : Statistic;
  errorLoadingStats: boolean;
  constructor(public appSettings:AppSettings, private betsService : BetsService){
    this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.betsService.getStatistics().subscribe((stats : Statistic) => {
      this.statistics = stats;
      this.single = stats.chartElements;
      this.top10_single = stats.top10Games;
    }, error => {
      this.errorLoadingStats = true;
    })

  }

  onSelect($event: {}) {
    console.log($event);
  }
}
