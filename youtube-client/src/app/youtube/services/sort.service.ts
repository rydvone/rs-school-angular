import { Injectable } from '@angular/core';
import { SETTINGS_SORT } from '../constants/settings.constat';
import { Card } from '../models/card.model';
import { SettingsSortDirection } from '../models/settings.model';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  sortDate(cards: Card[], direction: SettingsSortDirection): Card[] {
    const cardsDate = cards.map((obj) => {
      return { ...obj, publishedAt: new Date(obj.snippet.publishedAt) };
    });
    if (direction === SETTINGS_SORT.direction.asc) {
      return cardsDate.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    }
    return cardsDate.sort((a, b) => a.publishedAt.getTime() - b.publishedAt.getTime());
  }

  sortCount(cards: Card[], direction: SettingsSortDirection): Card[] {
    const cardsCount = cards.slice();
    if (direction === SETTINGS_SORT.direction.asc) {
      return cardsCount.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
    }
    return cardsCount.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
  }
}
