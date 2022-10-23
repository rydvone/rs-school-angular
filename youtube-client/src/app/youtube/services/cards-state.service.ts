import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsStateService {
  public cards$: Observable<Card[]>;

  private cards$$ = new BehaviorSubject([]);

  constructor() {
    this.cards$ = this.cards$$.asObservable();
  }

  private cardsState: Card[] = [];

  public get state() {
    return this.cardsState;
  }

  public set state(data: Card[]) {
    this.cardsState = data;
  }
}
