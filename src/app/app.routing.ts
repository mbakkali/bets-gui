import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import {BetCartComponent} from './pages/bet-cart/bet-cart.component';
import {BetComponent} from './pages/bet-cart/bet/bet.component';
import {BetListComponent} from './pages/bet-list/bet-list.component';
import {AuthenticationGuardService} from './authentication-guard.service';
import {UserListComponent} from './pages/user-list/user-list.component';

export const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: '', loadChildren: () => import('./pages/games/games.module').then(m => m.GamesModule), data: { breadcrumb: 'Users' }, canActivate: [AuthenticationGuardService]},
            { path: 'stats', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } ,canActivate: [AuthenticationGuardService]},
            { path: 'games', loadChildren: () => import('./pages/games/games.module').then(m => m.GamesModule), data: { breadcrumb: 'Users' } ,canActivate: [AuthenticationGuardService]},
            { path: 'ui', loadChildren: () => import('./pages/ui/ui.module').then(m => m.UiModule), data: { breadcrumb: 'UI' } ,canActivate: [AuthenticationGuardService]},
            { path: 'form-controls', loadChildren: () => import('./pages/form-controls/form-controls.module').then(m => m.FormControlsModule), data: { breadcrumb: 'Form Controls' } ,canActivate: [AuthenticationGuardService]},
            { path: 'tables', loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule), data: { breadcrumb: 'Tables' } ,canActivate: [AuthenticationGuardService]},
            { path: 'icons', loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsModule), data: { breadcrumb: 'Material Icons' } ,canActivate: [AuthenticationGuardService]},
            { path: 'drag-drop', loadChildren: () => import('./pages/drag-drop/drag-drop.module').then(m => m.DragDropModule), data: { breadcrumb: 'Drag & Drop' } ,canActivate: [AuthenticationGuardService]},
            { path: 'schedule', loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule), data: { breadcrumb: 'Schedule' } ,canActivate: [AuthenticationGuardService]},
            { path: 'mailbox', loadChildren: () => import('./pages/mailbox/mailbox.module').then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } ,canActivate: [AuthenticationGuardService]},
            { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule), data: { breadcrumb: 'Chat' }, canActivate: [AuthenticationGuardService]},
            { path: 'maps', loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule), data: { breadcrumb: 'Maps' }, canActivate: [AuthenticationGuardService]},
            { path: 'charts', loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } ,canActivate: [AuthenticationGuardService]},
            { path: 'dynamic-menu', loadChildren: () => import('./pages/dynamic-menu/dynamic-menu.module').then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' } , canActivate: [AuthenticationGuardService]},
            { path: 'profile', loadChildren: () => import ('./pages/profile/profile.module').then(m => m.ProfileModule), data: { breadcrumb: 'Profile' }, canActivate: [AuthenticationGuardService]},
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } ,canActivate: [AuthenticationGuardService]},
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' }, canActivate: [AuthenticationGuardService]},
            { path: 'cart', component: BetCartComponent, data: { breadcrumb: 'Cart' } ,canActivate: [AuthenticationGuardService]},
            { path: 'bet', component: BetListComponent, data: { breadcrumb: 'Bets' } ,canActivate: [AuthenticationGuardService]},
            { path: 'users', component: UserListComponent, data: { breadcrumb: 'Bets' } ,canActivate: [AuthenticationGuardService]},
            { path: 'bet/:id', component: BetComponent, data: { breadcrumb: 'Search' } ,canActivate: [AuthenticationGuardService]},
            { path: '**', redirectTo: '',canActivate: [AuthenticationGuardService] }
        ]
    },
    { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) , canActivate: [AuthenticationGuardService]},
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
    { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)},
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,  // <- uncomment this line for disable lazy load
    // useHash: true
});
