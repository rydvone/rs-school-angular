import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsStateService {
  private cardsState: Card[] = [];

  public get state() {
    return this.cardsState;
  }

  public set state(data: Card[]) {
    this.cardsState = data;
  }
}
