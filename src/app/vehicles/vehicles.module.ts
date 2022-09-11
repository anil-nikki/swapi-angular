import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from '../vehicles/vehicles.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import {LoadingModule} from "../loading/loading.module";
import {ListModule} from "../list/list.module";


@NgModule({
  declarations: [
    VehiclesComponent,
    VehicleDetailsComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    ListModule,
    LoadingModule
  ]
})
export class VehiclesModule { }
