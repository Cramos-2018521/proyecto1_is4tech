import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HighlightDirective {
  @Input() highlightColor: string; // Sin valor inicial

  constructor(private el: ElementRef) {
    this.highlightColor = '';
  }
  @HostListener('mouseenter') onMouseEnter() {
    if (this.highlightColor) {
      this.highlight(this.highlightColor);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
