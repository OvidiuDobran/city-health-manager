import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesRankingComponent } from './cities-ranking.component';

describe('CitiesRankingComponent', () => {
  let component: CitiesRankingComponent;
  let fixture: ComponentFixture<CitiesRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
