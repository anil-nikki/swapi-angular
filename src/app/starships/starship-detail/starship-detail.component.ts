import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Starship, StarshipsService } from '../starships.service';
import { Character, CharacterService } from '../../character/character.service';
import { Film, FilmsService } from '../../films/films.service';

interface StarshipData extends Starship {
  filmsData: Film[];
  pilotsData: Character[];
}

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit {
  starship$!: Observable<StarshipData>;

  constructor(
    private charactersSvc: CharacterService,
    private filmsSvc: FilmsService,
    private route: ActivatedRoute,
    private starshipsSvc: StarshipsService
  ) { }

  ngOnInit(): void {
    this.starship$ = this.route
      .paramMap
      .pipe(
        tap((params) => {
          const id = params.get('id');
          if(id !== null) {
            this.charactersSvc.changeCharacter(+id)
          }
        }),
        switchMap(() => combineLatest([
          this.starshipsSvc.starship$,
          this.charactersSvc.characters$,
          this.filmsSvc.films$
        ]).pipe(
          map(([starship, characters, films]) => {
            return {
              ...starship,
              filmsData: films.filter(film => starship.filmIds.includes(film.id)),
              pilotsData: characters.filter(character => starship.pilotIds.includes(character.id))
            };
          })
        ))
      );
  }

}
