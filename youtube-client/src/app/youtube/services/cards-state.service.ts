import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../models/card.model';
import { CardsHttpService } from './cards-http.service';

@Injectable({
  providedIn: 'root',
})
export class CardsStateService {
  public cards$: Observable<Card[]>;

  private cards$$ = new BehaviorSubject<Card[]>([]);

  constructor(private cardsHttp: CardsHttpService) {
    this.cards$ = this.cards$$.asObservable();
  }

  public getData(searchRequest: string) {
    this.cardsHttp.getCards(searchRequest).subscribe((cards) => {
      console.log(cards);
      this.cards$$.next(cards);
    });
  }

  private cardsState: Card[] = [];

  public get state() {
    return this.cardsState;
  }

  public set state(data: Card[]) {
    this.cardsState = data;
  }
}
