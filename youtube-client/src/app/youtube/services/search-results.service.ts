import { Injectable, Output, EventEmitter } from '@angular/core';
import { CardsStateService } from './cards-state.service';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  @Output() searchEvent = new EventEmitter();

  constructor(private cardsStateService: CardsStateService) {}

  public getCards(searchRequest: string) {
    this.cardsStateService.getData(searchRequest);
  }
}
