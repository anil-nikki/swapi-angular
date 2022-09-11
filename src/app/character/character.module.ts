import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import {ListModule} from "../list/list.module";
import {LoadingModule} from "../loading/loading.module";


@NgModule({
  declarations: [
    CharacterComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ListModule,
    LoadingModule
  ]
})
export class CharacterModule { }
