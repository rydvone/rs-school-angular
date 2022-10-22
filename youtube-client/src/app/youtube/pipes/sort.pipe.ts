import { Pipe, PipeTransform } from '@angular/core';
import { SETTINGS_SORT } from '../constants/settings.constat';
import { Card } from '../models/card.model';
import { SettingsSortDirection, SettingsSortType } from '../models/settings.model';
import { SortService } from '../services/sort.service';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  constructor(private sortService: SortService) {}

  transform(cards: Card[], sortType: SettingsSortType, sortDirection: SettingsSortDirection): Card[] {
    if (sortType === SETTINGS_SORT.type.none) {
      return cards;
    }
    const cardsInner: Card[] = <Card[]>JSON.parse(JSON.stringify(cards));

    if (sortType === SETTINGS_SORT.type.date) {
      const sortDate = this.sortService.sortDate(cardsInner, sortDirection);
      return sortDate;
    }
    const sortCount = this.sortService.sortCount(cardsInner, sortDirection);
    return sortCount;
  }
}
