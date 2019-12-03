import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityStatusComponent } from './city-status.component';

describe('CityStatusComponent', () => {
  let component: CityStatusComponent;
  let fixture: ComponentFixture<CityStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
