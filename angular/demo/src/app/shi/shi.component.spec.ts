import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiComponent } from './shi.component';

describe('ShiComponent', () => {
  let component: ShiComponent;
  let fixture: ComponentFixture<ShiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
