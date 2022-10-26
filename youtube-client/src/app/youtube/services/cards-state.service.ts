import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../models/card.model';
import { HttpCardsService } from './http-cards.service';

@Injectable({
  providedIn: 'root',
})
export class CardsStateService {
  public isLoadSearch$: Observable<boolean>;

  private isLoadSearch$$ = new BehaviorSubject(false);

  public cards$: Observable<Card[]>;

  public cards$$ = new BehaviorSubject<Card[]>([]);

  constructor(private cardsHttp: HttpCardsService) {
    this.isLoadSearch$ = this.isLoadSearch$$.asObservable();
    this.cards$ = this.cards$$.asObservable();
  }

  public getData(searchRequest: string) {
    this.cardsHttp.getCard(searchRequest).subscribe(({ items }) => {
      this.isLoadSearch$$.next(true);
      this.cards$$.next(items);
    });
  }
}
