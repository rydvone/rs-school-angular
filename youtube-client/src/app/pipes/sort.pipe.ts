import { Pipe, PipeTransform } from '@angular/core';
import { SettingsSort } from '../const/settings';
import { Card } from '../models/card.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(cards: Card[], sortType: string, sortDirection: string): Card[] {
    if (sortType === SettingsSort.type.none) {
      return cards;
    }
    const cardsInner: Card[] = <Card[]>JSON.parse(JSON.stringify(cards));
    if (sortType === SettingsSort.type.date) {
      const cardsInnerDate = cardsInner.map((obj) => {
        return { ...obj, publishedAt: new Date(obj.snippet.publishedAt) };
      });
      if (sortDirection === SettingsSort.direction.asc) {
        return [...cardsInnerDate].sort((a, b) => a.publishedAt.getTime() - b.publishedAt.getTime());
      }
      return [...cardsInnerDate].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    }
    if (sortDirection === SettingsSort.direction.asc) {
      return cardsInner.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
    }
    return cardsInner.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
  }
}
