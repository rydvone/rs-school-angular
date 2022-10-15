import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card.model';

@Pipe({
  name: 'filterByWord',
})
export class FilterByWordPipe implements PipeTransform {
  transform(cards: Card[], valueFilter: string): Card[] {
    if (!valueFilter) {
      return cards;
    }
    return cards.filter((card) => {
      const titleToLowerCase = card.snippet.title.toLowerCase();
      return titleToLowerCase.includes(valueFilter.toLowerCase());
    });
  }
}
