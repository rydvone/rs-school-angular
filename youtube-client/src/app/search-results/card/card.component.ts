import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public card!: Card;

  getPublicationAge(date: string): number {
    const datePublication = new Date(date).getTime();
    const dateNow = Date.now();
    const msYear = 1000 * 60 * 60 * 24 * 365;
    const msMonth = 1000 * 60 * 60 * 24 * 30;
    const msDay = 1000 * 60 * 60 * 24;

    const ageYear = Math.floor((dateNow - datePublication) / msYear);
    if (ageYear >= 1) {
      return 3;
    }
    const ageMonth = Math.floor((dateNow - datePublication) / msMonth);
    if (ageMonth > 6) {
      return 3;
    }
    if (ageMonth < 6 && ageMonth > 1) {
      return 2;
    }
    const ageDay = Math.floor((dateNow - datePublication) / msDay);
    if (ageDay > 7) {
      return 1;
    }
    if (ageDay <= 7) {
      return 0;
    }
    return 0;
  }

  getColor(date: string): string {
    const numAge = this.getPublicationAge(date);
    let color: string = '#e5e5e5';
    switch (numAge) {
      case 0:
        color = '#2f80ed';
        break;
      case 1:
        color = '#27ae60';
        break;
      case 2:
        color = '#f2c94c';
        break;
      case 3:
        color = '#eb5757';
        break;
      default:
        break;
    }
    return color;
  }
}
