import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { SendSettingsSort } from 'src/app/app.component';
import { selectCustomCards } from 'src/app/store/selectors/custom-cards.selector';
import { CustomCardsState } from 'src/app/store/state.models';
import { Card } from 'src/app/youtube/models/card.model';
import { CustomCard } from 'src/app/youtube/models/custom-card.model';
import { CardsStateService } from 'src/app/youtube/services/cards-state.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() valueSort!: SendSettingsSort;

  @Input() valueFilter = '';

  cards: Card[] = [];

  protected customCards: Observable<CustomCard[]>;

  constructor(private cardsState: CardsStateService, private store: Store<{ customCards: CustomCardsState }>) {
    this.customCards = this.store.select(selectCustomCards);
  }

  ngOnInit(): void {
    this.cardsState.getCards().subscribe((items) => {
      this.cards = items.slice();
    });
  }
}
