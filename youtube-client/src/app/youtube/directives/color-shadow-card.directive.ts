import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { DateColorService } from '../services/date-color.service';

@Directive({
  selector: '[appColorShadowCard]',
})
export class ColorShadowCardDirective {
  @Input('appColorShadowCard') set cardBorder(date: string) {
    this.setColorShadow(date);
  }

  constructor(private el: ElementRef, private render: Renderer2, private dateColorService: DateColorService) {}

  setColorShadow(date: string) {
    const color = this.dateColorService.getColor(date);
    this.render.setStyle(this.el.nativeElement, 'boxShadow', `5px 5px 20px ${color}73`);
  }
}
