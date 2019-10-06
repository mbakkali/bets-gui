import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {Menu} from './menu.model';
import {AuthenticationService} from '../../../authentication.service';

@Injectable()
export class MenuService {

    verticalMenuItems : Menu[];
    horizontalMenuItems : Menu[];
    public badgeEmitter = new EventEmitter();

    constructor(private location: Location,
                private router: Router,
                private authService : AuthenticationService) {

        this.verticalMenuItems = this.VERTICAL_MENU;
        this.horizontalMenuItems = this.HORIZONTAL_MENU;
        this.updateMenus();
        this.authService.authChanged.subscribe(authService => {
            this.updateMenus();
        })
    }

    private updateMenus() {
        let isUserAdmin: boolean = this.authService.isUserAdmin();
        //Remove admin tabs for non admins
        if (!isUserAdmin) {
            for (let i = 0; i < this.horizontalMenuItems.length; i++) {
                if (this.horizontalMenuItems[i].onlyAdmin == true) {
                    this.horizontalMenuItems.splice(i, 1);
                }
            }
            for (let j = 0; j < this.verticalMenuItems.length; j++) {
                if (this.verticalMenuItems[j].onlyAdmin == true) {
                    this.verticalMenuItems.splice(j, 1);
                }
            }
        }
        console.log("Horizontal menu items : ")
        console.log(JSON.stringify(this.horizontalMenuItems))
    }

    public getVerticalMenuItems(): Array<Menu> {
        return this.verticalMenuItems;
    }

    public getHorizontalMenuItems(): Array<Menu> {
        return this.horizontalMenuItems;
    }

    increaseBadgeForMenuBets() {
        for (let horizontalMenuItem of this.horizontalMenuItems) {
            if (horizontalMenuItem.routerLink == '/cart') {
                horizontalMenuItem.badgeCount = horizontalMenuItem.badgeCount + 1;
            }
        }

        for (let verticalMenuItem of this.verticalMenuItems) {
            if (verticalMenuItem.routerLink == '/cart') {
                verticalMenuItem.badgeCount = verticalMenuItem.badgeCount + 1;
            }
        }
        console.log("Horizontal menu items after increase : ")
        console.log(JSON.stringify(this.horizontalMenuItems))
        this.badgeEmitter.emit();
        console.log("Sent event to dedraw bar");

    }

    decreaseBadgeForMenuBets() {
        for (let horizontalMenuItem of this.horizontalMenuItems) {
            if (horizontalMenuItem.routerLink == '/cart') {
                horizontalMenuItem.badgeCount = horizontalMenuItem.badgeCount -1;
            }
        }

        for (let verticalMenuItem of this.verticalMenuItems) {
            if (verticalMenuItem.routerLink == '/cart') {
                verticalMenuItem.badgeCount = verticalMenuItem.badgeCount -1;
            }
        }
        console.log("Horizontal menu items after decrease : ")
        console.log(JSON.stringify(this.horizontalMenuItems))
        this.badgeEmitter.emit();
        console.log("Sent event to dedraw bar");

    }

    public expandActiveSubMenu(menu: Array<Menu>) {
        let url = this.location.path();
        let routerLink = url; // url.substring(1, url.length);
        let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
            let menuItem = activeMenuItem[0];
            while (menuItem.parentId != 0) {
                let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
                menuItem = parentMenuItem;
                this.toggleMenuItem(menuItem.id);
            }
        }
    }

    public toggleMenuItem(menuId) {
        let menuItem = document.getElementById('menu-item-' + menuId);
        let subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    }

    public closeOtherSubMenus(menu: Array<Menu>, menuId) {
        let currentMenuItem = menu.filter(item => item.id == menuId)[0];
        if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
            menu.forEach(item => {
                if (item.id != menuId) {
                    let subMenu = document.getElementById('sub-menu-' + item.id);
                    let menuItem = document.getElementById('menu-item-' + item.id);
                    if (subMenu) {
                        if (subMenu.classList.contains('show')) {
                            subMenu.classList.remove('show');
                            menuItem.classList.remove('expanded');
                        }
                    }
                }
            });
        }
    }


    setBadgeNumberTo(newValue : number) {
        for (let horizontalMenuItem of this.horizontalMenuItems) {
            if (horizontalMenuItem.routerLink == '/cart') {
                horizontalMenuItem.badgeCount = newValue;
            }
        }

        for (let verticalMenuItem of this.verticalMenuItems) {
            if (verticalMenuItem.routerLink == '/cart') {
                verticalMenuItem.badgeCount = newValue;
            }
        }
    }


    VERTICAL_MENU = [
        new Menu (1, 'Statistiques', '/stats', null, 'dashboard', null, false, 0,0,true),
        new Menu (2, 'Matchs', '/games', null, 'event', null, false, 0,0, false),
        new Menu (2, 'Panier', '/cart', null, 'save', null, false, 0,0,false),
        new Menu (2, 'Paris', '/bet', null, 'format_list_bulleted', null, false, 0,0, true),
        new Menu (2, 'Equipe', '/users', null, 'people_alt', null, false, 0,0, true)
    ];

    HORIZONTAL_MENU = [
        new Menu (1, 'Statistiques', '/stats', null, 'dashboard', null, false, 0,0, true),
        new Menu (2, 'Matchs', '/games', null, 'event', null, false, 0,0, false),
        new Menu (2, 'Panier', '/cart', null, 'save', null, false, 0,0, false),
        new Menu (2, 'Paris', '/bet', null, 'format_list_bulleted', null, false, 0,0, true),
        new Menu (2, 'Equipe', '/users', null, 'people_alt', null, false, 0,0, true)
    ];
}


