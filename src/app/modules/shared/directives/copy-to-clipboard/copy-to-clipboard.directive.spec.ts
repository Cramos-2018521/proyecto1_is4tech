import { CopyToClipboardDirective } from './copy-to-clipboard.directive';
import { ElementRef } from '@angular/core';

describe('CopyToClipboardDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(null);
    const directive = new CopyToClipboardDirective(elementRef);

    expect(directive).toBeTruthy();
  });
});
