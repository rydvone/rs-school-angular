import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { DateColorService } from '../services/date-color.service';

@Directive({
  selector: '[appColorBackground]',
})
export class ColorBackgroundDirective {
  @Input('appColorBackground') set cardBorder(date: string) {
    this.setColorBackground(date);
  }

  constructor(private el: ElementRef, private render: Renderer2, private dateColorService: DateColorService) {}

  setColorBackground(date: string) {
    const color = this.dateColorService.getColor(date);
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', `${color}`);
  }
}
