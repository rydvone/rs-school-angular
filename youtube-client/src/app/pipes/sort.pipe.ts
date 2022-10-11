import { Pipe, PipeTransform } from '@angular/core';
import { SettingsSort } from '../constant/settings';
import { Card } from '../models/card.model';
import { SettingsSortDirection, SettingsSortType } from '../models/settings.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(cards: Card[], sortType: SettingsSortType, sortDirection: SettingsSortDirection): Card[] {
    if (sortType === SettingsSort.type.none) {
      return cards;
    }
    const cardsInner: Card[] = <Card[]>JSON.parse(JSON.stringify(cards));

    if (sortType === SettingsSort.type.date) {
      const sortDate = this.sortDate(cardsInner, sortDirection);
      return sortDate;
    }
    const sortCount = this.sortCount(cardsInner, sortDirection);
    return sortCount;
  }

  sortDate(cards: Card[], direction: SettingsSortDirection): Card[] {
    const cardsDate = cards.map((obj) => {
      return { ...obj, publishedAt: new Date(obj.snippet.publishedAt) };
    });
    if (direction === SettingsSort.direction.asc) {
      return [...cardsDate].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    }
    return [...cardsDate].sort((a, b) => a.publishedAt.getTime() - b.publishedAt.getTime());
  }

  sortCount(cards: Card[], direction: SettingsSortDirection): Card[] {
    const cardsCount = cards;
    if (direction === SettingsSort.direction.asc) {
      return cardsCount.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
    }
    return cardsCount.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
  }
}
