import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanadeLoaderComponent } from './avanade-loader.component';

describe('AvanadeLoaderComponent', () => {
  let component: AvanadeLoaderComponent;
  let fixture: ComponentFixture<AvanadeLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanadeLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanadeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
