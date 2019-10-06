import {Component, OnInit, Input, ViewChild, ViewEncapsulation, AfterViewInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { MenuService } from '../menu.service';
import { MatMenuTrigger } from '@angular/material';
import {Menu} from '../menu.model';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
})
export class HorizontalMenuComponent implements OnInit, AfterViewInit {
  @Input('menuParentId') menuParentId;
  public menuItems:Array<Menu>;
  public settings: Settings;
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  constructor(public appSettings:AppSettings, private menuService:MenuService, public router:Router) {
    this.settings = this.appSettings.settings;
    console.log("Start subscription to event onRedrawMenuAfterBadgeUpdated")
    this.updateMenu();
    this.menuService.badgeEmitter.subscribe(event => {
      console.log("Updating menus in horizontal-menu-component.ts")
      this.updateMenu();
    })
  }

  ngOnInit() {
    console.log("Init draw horizontal bar")
    this.updateMenu();
  }

  updateMenu(){
    this.menuItems = this.menuService.getHorizontalMenuItems();
    this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    console.log("Horizontal bar is redrawn")
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(this.settings.fixedHeader){
          let mainContent = document.getElementById('main-content');
          if(mainContent){
            mainContent.scrollTop = 0;
          }
        }
        else{
          document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
      }                
    });
  } 

}