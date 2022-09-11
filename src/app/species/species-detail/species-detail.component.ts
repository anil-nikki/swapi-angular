import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Specie, SpeciesService } from '../species.service';
import { Character, CharacterService } from '../../character/character.service';
import { Film, FilmsService } from '../../films/films.service';
import { Planet, PlanetsService } from 'src/app/planets/planets.service';

interface SpecieData extends Specie {
  filmsData: Film[];
  homeworldData: Planet;
  peopleData: Character[];
}

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.scss']
})
export class SpeciesDetailComponent implements OnInit {
  specie$!: Observable<SpecieData>;

  constructor(
    private charactersSvc: CharacterService,
    private filmsSvc: FilmsService,
    private planetsSvc: PlanetsService,
    private route: ActivatedRoute,
    private speciesSvc: SpeciesService
  ) { }

  ngOnInit(): void {
    this.specie$ = this.route
      .paramMap
      .pipe(
        tap((params) => {
          const id = params.get('id');
          if(id !== null) {
            this.charactersSvc.changeCharacter(+id)
          }
        }),
        switchMap(() => combineLatest([
          this.speciesSvc.specie$,
          this.charactersSvc.characters$,
          this.filmsSvc.films$,
          this.planetsSvc.planets$
        ]).pipe(
          map(([specie, characters, films, planets]) => {
            return {
              ...specie,
              filmsData: films.filter(film => specie.filmIds.includes(film.id)),
              peopleData: characters.filter(character => specie.peopleIds.includes(character.id)),
              homeworldData: planets.find(planet => specie.homeworldId === planet.id)
            }
          })
        ))
      ) as Observable<any>;
  }
}
