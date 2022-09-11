import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from '../list/list.module';
import { LoadingModule } from '../loading/loading.module';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from '../starships/starships.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';


@NgModule({
  declarations: [
    StarshipsComponent,
    StarshipDetailComponent
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    ListModule,
    LoadingModule,
  ]
})
export class StarshipsModule { }
