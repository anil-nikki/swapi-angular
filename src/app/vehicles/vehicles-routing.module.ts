import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VehicleDetailsComponent} from "./vehicle-details/vehicle-details.component";
import {VehiclesComponent} from "./vehicles.component";

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent
  },
  {
    path: ':id',
    component: VehicleDetailsComponent,
    data: {
      pageTitle: 'Vehicle Info'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
