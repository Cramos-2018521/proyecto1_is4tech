import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamUpdateComponent } from './param-update.component';

describe('ParamUpdateComponent', () => {
  let component: ParamUpdateComponent;
  let fixture: ComponentFixture<ParamUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParamUpdateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ParamUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
