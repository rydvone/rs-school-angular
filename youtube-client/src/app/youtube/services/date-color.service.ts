import { Injectable } from '@angular/core';
import { CARD_BORDER_COLOR } from '../constants/card.constant';

@Injectable()
export class DateColorService {
  public getColor(date: string) {
    const datePublication = new Date(date).getTime();
    const dateNow = Date.now();
    const msInDay = 1000 * 60 * 60 * 24;
    const msInMonth = msInDay * 30;
    const msInYear = msInDay * 365;

    const countYear = Math.floor((dateNow - datePublication) / msInYear);
    if (countYear >= 1) {
      return CARD_BORDER_COLOR.four;
    }
    const countMonth = Math.floor((dateNow - datePublication) / msInMonth);
    if (countMonth > 6) {
      return CARD_BORDER_COLOR.four;
    }
    if (countMonth < 6 && countMonth > 1) {
      return CARD_BORDER_COLOR.three;
    }
    const countDay = Math.floor((dateNow - datePublication) / msInDay);
    if (countDay > 7) {
      return CARD_BORDER_COLOR.two;
    }
    if (countDay <= 7) {
      return CARD_BORDER_COLOR.one;
    }
    return CARD_BORDER_COLOR.zero;
  }
}
