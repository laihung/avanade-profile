import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanadePaginationComponent } from './avanade-pagination.component';

describe('AvanadePaginationComponent', () => {
  let component: AvanadePaginationComponent;
  let fixture: ComponentFixture<AvanadePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanadePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanadePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
