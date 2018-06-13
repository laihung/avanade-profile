import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanadeButtonComponent } from './avanade-button.component';

describe('AvanadeButtonComponent', () => {
  let component: AvanadeButtonComponent;
  let fixture: ComponentFixture<AvanadeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanadeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanadeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
