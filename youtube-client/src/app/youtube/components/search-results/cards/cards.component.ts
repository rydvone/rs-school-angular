import { Component, Input, OnInit } from '@angular/core';
import { SendSettingsSort } from 'src/app/app.component';
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

  constructor(private cardsState: CardsStateService) {}

  cards: Card[] = [];

  customCards: CustomCard[] = [];

  ngOnInit(): void {
    this.cardsState.getCards().subscribe((items) => {
      this.cards = items.slice();
    });
  }
}
