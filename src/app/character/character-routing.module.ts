import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterComponent} from "./character.component";
import {CharacterDetailComponent} from "./character-detail/character-detail.component";

const routes: Routes = [
  {
    path: '',
    component: CharacterComponent
  },
  {
    path: ':id',
    component: CharacterDetailComponent,
    data: {
      pageTitle: 'Character Info'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
