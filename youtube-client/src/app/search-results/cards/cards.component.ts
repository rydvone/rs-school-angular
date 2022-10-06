import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import response from '../../../assets/response/response.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() searchResult!: string;

  responseInner: Card[] = <Card[]>JSON.parse(JSON.stringify(response.items));

  cards: Card[] = this.shuffleCards();

  shuffleCards() {
    const array = this.responseInner;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
