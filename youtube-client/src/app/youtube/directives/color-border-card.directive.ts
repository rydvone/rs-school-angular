import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { DateColorService } from '../services/date-color.service';

@Directive({
  selector: '[appColorBorderCard]',
})
export class ColorBorderCardDirective {
  @Input('appColorBorderCard') set cardBorder(date: string) {
    this.setColorBorder(date);
  }

  constructor(private el: ElementRef, private render: Renderer2, private dateColorService: DateColorService) {}

  setColorBorder(date: string) {
    const color = this.dateColorService.getColor(date);
    this.render.setStyle(this.el.nativeElement, 'borderBottom', `8px solid ${color}`);
  }
}
