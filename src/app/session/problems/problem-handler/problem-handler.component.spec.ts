import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHandlerComponent } from './problem-handler.component';

describe('ProblemHandlerComponent', () => {
  let component: ProblemHandlerComponent;
  let fixture: ComponentFixture<ProblemHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
