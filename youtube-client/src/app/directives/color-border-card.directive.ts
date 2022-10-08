import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { CardBorderColor } from '../const/card';

@Directive({
  selector: '[appColorBorderCard]',
})
export class ColorBorderCardDirective {
  @Input('appColorBorderCard') set date(date: string) {
    this.setColor(date);
  }

  constructor(private el: ElementRef, private render: Renderer2) {}

  private getPublicationAge(date: string): number {
    const datePublication = new Date(date).getTime();
    const dateNow = Date.now();
    const msYear = 1000 * 60 * 60 * 24 * 365;
    const msMonth = 1000 * 60 * 60 * 24 * 30;
    const msDay = 1000 * 60 * 60 * 24;

    const ageYear = Math.floor((dateNow - datePublication) / msYear);
    if (ageYear >= 1) {
      return 4;
    }
    const ageMonth = Math.floor((dateNow - datePublication) / msMonth);
    if (ageMonth > 6) {
      return 4;
    }
    if (ageMonth < 6 && ageMonth > 1) {
      return 3;
    }
    const ageDay = Math.floor((dateNow - datePublication) / msDay);
    if (ageDay > 7) {
      return 2;
    }
    if (ageDay <= 7) {
      return 1;
    }
    return 0;
  }

  private getColor(date: string): string {
    const numAge = this.getPublicationAge(date);
    let color: string = CardBorderColor.zero;
    switch (numAge) {
      case 1:
        color = CardBorderColor.one;
        break;
      case 2:
        color = CardBorderColor.two;
        break;
      case 3:
        color = CardBorderColor.three;
        break;
      case 4:
        color = CardBorderColor.four;
        break;
      default:
        break;
    }
    return color;
  }

  setColor(date: string) {
    const color = this.getColor(date);
    this.render.setStyle(this.el.nativeElement, 'borderBottom', `8px solid ${color}`);
  }
}
