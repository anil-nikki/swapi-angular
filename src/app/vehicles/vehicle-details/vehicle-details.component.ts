import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Vehicle, VehiclesService } from '../vehicles.service';
import { Character, CharacterService } from '../../character/character.service';
import { Film, FilmsService } from '../../films/films.service';

interface VehicleData extends Vehicle {
  filmsData: Film[];
  pilotsData: Character[];
}
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  vehicle$!: Observable<VehicleData>;

  constructor(
    private charactersSvc: CharacterService,
    private filmsSvc: FilmsService,
    private vehiclesSvc: VehiclesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.vehicle$ = this.route
      .paramMap
      .pipe(
        tap((params) => {
          const id = params.get('id');
          if(id !== null) {
            this.charactersSvc.changeCharacter(+id)
          }
        }),
        switchMap(() => combineLatest([
          this.vehiclesSvc.vehicle$,
          this.charactersSvc.characters$,
          this.filmsSvc.films$
        ]).pipe(
          map(([vehicle, characters, films]) => {
            return {
              ...vehicle,
              filmsData: films.filter(film => vehicle.filmIds.includes(film.id)),
              pilotsData: characters.filter(character => vehicle.pilotIds.includes(character.id))
            };
          })
        ))
      );
  }
}
