import { Injectable } from '@angular/core';
import { CardsStateService } from './cards-state.service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private cardsState: CardsStateService) {}

  private cards = this.cardsState.state;

  getCardById(id: string) {
    const card = this.cards.find((item) => item.id === id);
    return card;
  }
}
