import { Injectable, Output, EventEmitter } from '@angular/core';
import response from 'src/assets/response/response.json';
import { Card } from '../models/card.model';
import { CardsStateService } from './cards-state.service';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  @Output() searchEvent = new EventEmitter();

  constructor(private cardsStateService: CardsStateService) {}

  public searchResult: Card[] = <Card[]>JSON.parse(JSON.stringify(response.items));

  public getCards() {
    this.saveCards(this.searchResult);
    this.searchEvent.emit();
  }

  public saveCards(cardsIn: Card[]) {
    const cards: Card[] = <Card[]>JSON.parse(JSON.stringify(cardsIn));
    const cardsResult = this.shuffleArray(cards);
    this.cardsStateService.state = cardsResult;
  }

  private shuffleArray<T>(arrayIn: T[]): T[] {
    const array = arrayIn;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
