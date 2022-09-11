import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Character, CharacterService } from '../character.service';
import {Planet, PlanetsService} from "../../planets/planets.service";
import {Vehicle, VehiclesService} from "../../planets/vehicles.service";

interface CharacterData extends Character {
  homeworldData: Planet;
  vehiclesData: Vehicle[];
}
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character$!: Observable<CharacterData>;

  constructor(
    private charactersSvc: CharacterService,
    private planetsSvc: PlanetsService,
    private route: ActivatedRoute,
    private vehiclesSvc: VehiclesService
  ) { }

  ngOnInit(): void {
    this.character$ = this.route.paramMap.pipe(
        tap((params) => {
          const id = params.get('id');
          if(id !== null) {
            this.charactersSvc.changeCharacter(+id)
          }

        }),
        switchMap(() => combineLatest([
          this.charactersSvc.character$,
          this.planetsSvc.planets$,
          this.vehiclesSvc.vehicles$
        ]).pipe(
          map(([character, planets, vehicles]) => {
            return {
              ...character,
              homeworldData: planets.find(planet => character.homeworldId === planet.id),
              vehiclesData: vehicles.filter(vehicle => character.vehicleIds.includes(vehicle.id))
            }
          })
        ))
      ) as Observable<any>;
  }

}
