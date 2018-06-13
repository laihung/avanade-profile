import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanadeCardComponent } from './avanade-card.component';

describe('AvanadeCardComponent', () => {
  let component: AvanadeCardComponent;
  let fixture: ComponentFixture<AvanadeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanadeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanadeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
