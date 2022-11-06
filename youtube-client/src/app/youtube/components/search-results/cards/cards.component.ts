import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SendSettingsSort } from 'src/app/app.component';
import { selectCustomCards } from 'src/app/store/selectors/custom-cards.selector';
import { selectAllYoutubeCards } from 'src/app/store/selectors/youtube-cards.selector';
import { Card } from 'src/app/youtube/models/card.model';
import { CustomCard } from 'src/app/youtube/models/custom-card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() valueSort!: SendSettingsSort;

  @Input() valueFilter = '';

  protected cards: Card[] = [];

  protected customCards: Observable<CustomCard[]>;

  constructor(private store: Store) {
    this.customCards = this.store.select(selectCustomCards);
    this.store.select(selectAllYoutubeCards).subscribe((items) => {
      this.cards = items.slice();
    });
  }
}
