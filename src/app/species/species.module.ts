import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from '../list/list.module';
import { LoadingModule } from '../loading/loading.module';
import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from '../species/species.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';


@NgModule({
  declarations: [
    SpeciesComponent,
    SpeciesDetailComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    ListModule,
    LoadingModule,
  ]
})
export class SpeciesModule { }
