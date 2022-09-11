import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmsComponent } from './films.component';
import {FilmDetailComponent} from "./film-detail/film-detail.component";

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent
  },
  {
    path: ':id',
    component: FilmDetailComponent,
    data: {
      pageTitle: 'Film Info'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
