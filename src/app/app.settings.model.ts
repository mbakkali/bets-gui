export class Settings {
    constructor(public name: string, 
                public loadingSpinner: boolean,
                public fixedHeader:boolean,
                public sidenavIsOpened: boolean,
                public sidenavIsPinned: boolean,
                public sidenavUserBlock: boolean,
                public menu: string,
                public menuType: string,
                public theme: string,
                public rtl: boolean) {
        this.sidenavUserBlock = false;
        this.sidenavIsPinned = false;
        this.menuType = 'compact'
        this.menu = 'horizontal'
    }
}
