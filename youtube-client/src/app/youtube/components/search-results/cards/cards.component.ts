import { Component, Input } from '@angular/core';
import { SendSettingsSort } from 'src/app/app.component';
import { Card } from 'src/app/youtube/models/card.model';
import { CardsStateService } from 'src/app/youtube/services/cards-state.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() valueSort!: SendSettingsSort;

  @Input() valueFilter = '';

  constructor(private cardsStateService: CardsStateService) {}

  cards: Card[] = this.cardsStateService.state;
}
