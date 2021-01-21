import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardDefinitionComponent } from './reward-definition.component';

describe('RewardDefinitionComponent', () => {
  let component: RewardDefinitionComponent;
  let fixture: ComponentFixture<RewardDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
