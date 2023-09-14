import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CommaSeparateDirective } from './comma-separate.directive';

// Simulación de un objeto Renderer2 vacío
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockRenderer: any = {
  setProperty: () => {}
};

@Component({
  template: '<input type="text" commaSeparate>'
})
class TestComponent {}

describe('CommaSeparateDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommaSeparateDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    inputElement = fixture.debugElement.query(By.css('input'));
  });

  it('should create an instance', () => {
    const directive = new CommaSeparateDirective(
      inputElement.nativeElement,
      mockRenderer
    );
    expect(directive).toBeTruthy();
  });
});
