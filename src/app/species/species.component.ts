import { Component, OnInit } from '@angular/core';
import {Specie, SpeciesService} from "./species.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  species$!: Observable<Specie[]>;

  get currentFilter(): string {
    return this.speciesSvc.getCurrentFilter();
  }

  constructor(private speciesSvc: SpeciesService) { }

  ngOnInit(): void {
    this.species$ = this.speciesSvc.species$;
  }

  onInput(text: string): void {
    this.speciesSvc.changeFilter(text);
  }
}
