import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityLoginComponent } from './city-login.component';

describe('CityLoginComponent', () => {
  let component: CityLoginComponent;
  let fixture: ComponentFixture<CityLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
