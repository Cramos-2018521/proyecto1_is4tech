import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCommaSeparate]'
})
export class CommaSeparateDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const parsedValue = parseFloat(value.replace(/,/g, ''));
    if (!isNaN(parsedValue)) {
      const formattedValue = this.formatNumber(parsedValue);
      this.renderer.setProperty(this.el.nativeElement, 'value', formattedValue);
    }
  }

  private formatNumber(value: number): string {
    return value.toLocaleString();
  }
}
