import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Film, FilmsService } from '../films.service';
import { Character, CharacterService } from '../../character/character.service';
import { Planet, PlanetsService } from '../../planets/planets.service';
import { Specie, SpeciesService } from '../../species/species.service';
import { Starship, StarshipsService } from '../../starships/starships.service';
import { Vehicle, VehiclesService } from '../../vehicles/vehicles.service';

interface FilmData extends Film {
  charactersData: Character[];
  planetsData: Planet[];
  speciesData: Specie[];
  starshipsData: Starship[];
  vehiclesData: Vehicle[];
}

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  film$!: Observable<FilmData>;

  constructor(
    private charactersSvc: CharacterService,
    private filmsSvc: FilmsService,
    private planetsSvc: PlanetsService,
    private route: ActivatedRoute,
    private speciesSvc: SpeciesService,
    private starshipsSvc: StarshipsService,
    private vehiclesSvc: VehiclesService
  ) { }

  ngOnInit(): void {
    this.film$ = this.route
      .paramMap
      .pipe(
        tap((params) => {
          const id = params.get('id');
          if(id !== null) {
            this.charactersSvc.changeCharacter(+id)
          }
        }),
        switchMap(() => combineLatest([
          this.filmsSvc.film$,
          this.charactersSvc.characters$,
          this.planetsSvc.planets$,
          this.speciesSvc.species$,
          this.starshipsSvc.starships$,
          this.vehiclesSvc.vehicles$
        ]).pipe(
          map(([film, characters, planets, species, starships, vehicles]) => {
            return {
              ...film,
              charactersData: characters.filter(character => film.characterIds.includes(character.id)),
              planetsData: planets.filter(planet => film.planetIds.includes(planet.id)),
              speciesData: species.filter(specie => film.speciesIds.includes(specie.id)),
              starshipsData: starships.filter(starship => film.starshipIds.includes(starship.id)),
              vehiclesData: vehicles.filter(vehicle => film.vehicleIds.includes(vehicle.id))
            };
          })
        ))
      );
  }

}
