import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhiteSpaceDirective } from './white-space.directive';
import { Component, ElementRef } from '@angular/core';

@Component({
  template: '<textarea appWhiteSpace [(textToParse)]="parsedText"></textarea>'
})
class TestComponent {
  parsedText: string = '';
}

describe('WhiteSpaceDirective', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhiteSpaceDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new WhiteSpaceDirective(
      new ElementRef({} as HTMLInputElement)
    );
    expect(directive).toBeTruthy();
  });
});
