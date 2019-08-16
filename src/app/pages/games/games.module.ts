import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {SharedModule} from '../../shared/shared.module';
import {PipesModule} from '../../theme/pipes/pipes.module';
import {GamesComponent} from './games.component';
import {GameDialogComponent} from './user-dialog/game-dialog.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

export const routes = [
  { path: '', component: GamesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,
    FontAwesomeModule
  ],
  declarations: [
    GamesComponent,
    GameDialogComponent
  ],
  entryComponents:[
    GameDialogComponent
  ]
})
export class GamesModule { }
