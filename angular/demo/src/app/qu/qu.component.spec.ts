import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuComponent } from './qu.component';

describe('QuComponent', () => {
  let component: QuComponent;
  let fixture: ComponentFixture<QuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
