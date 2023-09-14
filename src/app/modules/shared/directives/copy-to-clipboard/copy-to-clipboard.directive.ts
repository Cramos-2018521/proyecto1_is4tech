import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]'
})
export class CopyToClipboardDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.copyToClipboard();
  }

  private copyToClipboard() {
    const element = this.el.nativeElement;
    const textToCopy = element.innerText || element.textContent;

    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }
}
