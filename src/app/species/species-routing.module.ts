import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpeciesDetailComponent} from "./species-detail/species-detail.component";
import {SpeciesComponent} from "./species.component";

const routes: Routes = [
  {
    path: '',
    component: SpeciesComponent
  },
  {
    path: ':id',
    component: SpeciesDetailComponent,
    data: {
      pageTitle: 'Species Info'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
