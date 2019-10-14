import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import {BetCartComponent} from './pages/bet-cart/bet-cart.component';
import {BetComponent} from './pages/bet-cart/bet/bet.component';
import {BetListComponent} from './pages/bet-list/bet-list.component';
import {AuthenticationGuardService} from './authentication-guard.service';
import {UserListComponent} from './pages/user-list/user-list.component';
import {BetBoardComponent} from "./pages/bet-board/bet-board.component";

export const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: '', loadChildren: () => import('./pages/games/games.module').then(m => m.GamesModule), data: { breadcrumb: 'Users' }, canActivate: [AuthenticationGuardService]},
            { path: 'stats', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } ,canActivate: [AuthenticationGuardService]},
            { path: 'games', loadChildren: () => import('./pages/games/games.module').then(m => m.GamesModule), data: { breadcrumb: 'Users' } ,canActivate: [AuthenticationGuardService]},
            { path: 'cart', component: BetCartComponent, data: { breadcrumb: 'Cart' } ,canActivate: [AuthenticationGuardService]},
            { path: 'bet', component: BetListComponent, data: { breadcrumb: 'Bets' } ,canActivate: [AuthenticationGuardService]},
            { path: 'bet-board', component: BetBoardComponent, data: { breadcrumb: 'Bets' } ,canActivate: [AuthenticationGuardService]},
            { path: 'users', component: UserListComponent, data: { breadcrumb: 'Bets' } ,canActivate: [AuthenticationGuardService]},
            { path: 'bet/:id', component: BetComponent, data: { breadcrumb: 'Search' } ,canActivate: [AuthenticationGuardService]},
            { path: '**', redirectTo: '',canActivate: [AuthenticationGuardService] }
        ]
    },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
    { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)},
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,  // <- uncomment this line for disable lazy load
    // useHash: true
});
