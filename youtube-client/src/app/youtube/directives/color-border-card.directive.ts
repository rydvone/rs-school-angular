import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { CardBorderColor } from '../constant/card';

@Directive({
  selector: '[appColorBorderCard]',
})
export class ColorBorderCardDirective {
  @Input('appColorBorderCard') set date(date: string) {
    this.setColor(date);
  }

  constructor(private el: ElementRef, private render: Renderer2) {}

  getColor(date: string) {
    const datePublication = new Date(date).getTime();
    const dateNow = Date.now();
    const msInYear = 1000 * 60 * 60 * 24 * 365;
    const msInMonth = 1000 * 60 * 60 * 24 * 30;
    const msInDay = 1000 * 60 * 60 * 24;

    const countYear = Math.floor((dateNow - datePublication) / msInYear);
    if (countYear >= 1) {
      return CardBorderColor.four;
    }
    const countMonth = Math.floor((dateNow - datePublication) / msInMonth);
    if (countMonth > 6) {
      return CardBorderColor.four;
    }
    if (countMonth < 6 && countMonth > 1) {
      return CardBorderColor.three;
    }
    const countDay = Math.floor((dateNow - datePublication) / msInDay);
    if (countDay > 7) {
      return CardBorderColor.two;
    }
    if (countDay <= 7) {
      return CardBorderColor.one;
    }
    return CardBorderColor.zero;
  }

  setColor(date: string) {
    const color = this.getColor(date);
    this.render.setStyle(this.el.nativeElement, 'borderBottom', `8px solid ${color}`);
  }
}
