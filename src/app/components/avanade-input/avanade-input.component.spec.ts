import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanadeInputComponent } from './avanade-input.component';

describe('AvanadeInputComponent', () => {
  let component: AvanadeInputComponent;
  let fixture: ComponentFixture<AvanadeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanadeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanadeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
