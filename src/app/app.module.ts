import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';
import {CustomOverlayContainer} from './theme/utils/custom-overlay-container';

import {AgmCoreModule} from '@agm/core';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
    suppressScrollX: true
};
import {CalendarModule} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {SharedModule} from './shared/shared.module';
import {PipesModule} from './theme/pipes/pipes.module';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {PagesComponent} from './pages/pages.component';
import {BlankComponent} from './pages/blank/blank.component';
import {SearchComponent} from './pages/search/search.component';
import {NotFoundComponent} from './pages/errors/not-found/not-found.component';
import {ErrorComponent} from './pages/errors/error/error.component';
import {AppSettings} from './app.settings';

import {SidenavComponent} from './theme/components/sidenav/sidenav.component';
import {VerticalMenuComponent} from './theme/components/menu/vertical-menu/vertical-menu.component';
import {HorizontalMenuComponent} from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import {BreadcrumbComponent} from './theme/components/breadcrumb/breadcrumb.component';
import {FlagsMenuComponent} from './theme/components/flags-menu/flags-menu.component';
import {FullScreenComponent} from './theme/components/fullscreen/fullscreen.component';
import {ApplicationsComponent} from './theme/components/applications/applications.component';
import {MessagesComponent} from './theme/components/messages/messages.component';
import {UserMenuComponent} from './theme/components/user-menu/user-menu.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faChartArea,
    faChartPie,
    faCoffee,
    faCog, faEye,
    faEyeSlash,
    faFutbol,
    faPlus,
    faSearch,
    faTimes,
    faTrash
} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons/faList';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BetCartComponent} from './pages/bet-cart/bet-cart.component';
import {faCalendarPlus} from '@fortawesome/free-solid-svg-icons/faCalendarPlus';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import {BetsService} from './pages/bet-cart/bets.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {SimpleBetComponent} from './pages/bet-cart/simple-bet/simple-bet.component';
import {BetComponent} from './pages/bet-cart/bet/bet.component';
import {NgxPrintModule} from 'ngx-print';
import {BetInvoiceComponent} from './pages/bet-cart/bet/bet-invoice/bet-invoice.component';
import {BetDetailComponent, PreviewTicketDialog} from './pages/bet-cart/bet/bet-detail/bet-detail.component';
import {BetListComponent, BetListDeleteDialog} from './pages/bet-list/bet-list.component';
import { BetSubListComponent } from './pages/bet-cart/bet/bet-sub-list/bet-sub-list.component';
import {LoginModule} from './pages/login/login.module';
import {AuthenticationInterceptorService} from './authentication-interceptor.service';
import {AuthenticationService} from './authentication.service';
import {AuthenticationGuardService} from './authentication-guard.service';
import {UserListComponent, UserListDialog} from './pages/user-list/user-list.component';
import {UserService} from './pages/user-list/user.service';

registerLocaleData(localeFr);

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDLf9Ywk47zipEtorDewwMmB3JtuXdzYL4'
        }),
        PerfectScrollbarModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        SharedModule,
        PipesModule,
        routing,
        FontAwesomeModule,
        HttpClientModule,
        NgxPrintModule,
        LoginModule
    ],
    declarations: [
        AppComponent,
        PagesComponent,
        BlankComponent,
        SearchComponent,
        NotFoundComponent,
        ErrorComponent,
        SidenavComponent,
        VerticalMenuComponent,
        HorizontalMenuComponent,
        BreadcrumbComponent,
        FlagsMenuComponent,
        FullScreenComponent,
        ApplicationsComponent,
        MessagesComponent,
        UserMenuComponent,
        BetCartComponent,
        SimpleBetComponent,
        BetComponent,
        BetInvoiceComponent,
        BetDetailComponent,
        BetListComponent,
        BetListDeleteDialog,
        PreviewTicketDialog,
        UserListDialog,
        BetSubListComponent,
        UserListComponent
    ],
    entryComponents: [
        VerticalMenuComponent,
        BetListDeleteDialog,
        PreviewTicketDialog,
        UserListDialog
    ],
    providers: [
        AppSettings, BetsService,UserService, HttpClient, AuthenticationService, AuthenticationGuardService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi : true},
        {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
        {provide: OverlayContainer, useClass: CustomOverlayContainer},
        {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},

        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
        // `MatMomentDateModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
        {provide: LOCALE_ID, useValue: 'fr-FR'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private adapter: DateAdapter<any>) {

        this.adapter.setLocale('fr');
        library.add(faCoffee);
        library.add(faCalendarPlus);
        library.add(faPlus);
        library.add(faChartArea);
        library.add(faChartPie);
        library.add(faCog);
        library.add(faList);
        library.add(faFutbol);
        library.add(faHome);
        library.add(faCircleNotch);
        library.add(faSpinner);
        library.add(faTrash);
        library.add(faSearch);
        library.add(faTimes);
        library.add(faClock);
        library.add(faEyeSlash);
        library.add(faEye);
    }
}
