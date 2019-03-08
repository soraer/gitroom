import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainwebComponent } from './mainweb.component';

describe('MainwebComponent', () => {
  let component: MainwebComponent;
  let fixture: ComponentFixture<MainwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
