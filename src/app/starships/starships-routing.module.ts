import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StarshipDetailComponent} from "./starship-detail/starship-detail.component";
import {StarshipsComponent} from "./starships.component";

const routes: Routes = [
  {
    path: '',
    component: StarshipsComponent
  },
  {
    path: ':id',
    component: StarshipDetailComponent,
    data: {
      pageTitle: 'Starship Info'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
