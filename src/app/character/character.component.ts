import { Component, OnInit } from '@angular/core';
import {Character, CharacterService} from "./character.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters$!: Observable<Character[]>;

  get currentFilter(): string {
    return this.charactersSvc.getCurrentFilter();
  }

  constructor(private charactersSvc: CharacterService) { }

  ngOnInit(): void {
    this.characters$ = this.charactersSvc.characters$;
  }

  onInput(text: string): void {
    this.charactersSvc.changeFilter(text);
  }

}
