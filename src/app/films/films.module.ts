import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from '../films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import {ListModule} from "../list/list.module";
import {LoadingModule} from "../loading/loading.module";


@NgModule({
  declarations: [
    FilmsComponent,
    FilmDetailComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    ListModule,
    LoadingModule
  ]
})
export class FilmsModule { }
