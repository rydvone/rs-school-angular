import { Pipe, PipeTransform } from '@angular/core';
import { SettingsSort } from '../constants/settings.constat';
import { Card } from '../models/card.model';
import { SettingsSortDirection, SettingsSortType } from '../models/settings.model';
import { SortService } from '../services/sort.service';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  constructor(private sortService: SortService) {}

  transform(cards: Card[], sortType: SettingsSortType, sortDirection: SettingsSortDirection): Card[] {
    if (sortType === SettingsSort.type.none) {
      return cards;
    }
    const cardsInner: Card[] = <Card[]>JSON.parse(JSON.stringify(cards));

    if (sortType === SettingsSort.type.date) {
      const sortDate = this.sortService.sortDate(cardsInner, sortDirection);
      return sortDate;
    }
    const sortCount = this.sortService.sortCount(cardsInner, sortDirection);
    return sortCount;
  }
}
