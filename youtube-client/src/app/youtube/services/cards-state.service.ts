import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../models/card.model';
import { HttpCardsService } from './http-cards.service';

@Injectable({
  providedIn: 'root',
})
export class CardsStateService {
  private isLoadSearch$ = new BehaviorSubject(false);

  private cards$ = new BehaviorSubject<Card[]>([]);

  constructor(private cardsHttp: HttpCardsService) {}

  public getData(searchRequest: string) {
    this.cardsHttp.getCard(searchRequest).subscribe(({ items }) => {
      this.isLoadSearch$.next(true);
      this.cards$.next(items);
    });
  }

  public getCards(): Observable<Card[]> {
    return this.cards$.asObservable();
  }

  public isLoadSearch(): Observable<boolean> {
    return this.isLoadSearch$.asObservable();
  }
}
