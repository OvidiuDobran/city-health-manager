import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedProblemsComponent } from './assigned-problems.component';

describe('AssignedProblemsComponent', () => {
  let component: AssignedProblemsComponent;
  let fixture: ComponentFixture<AssignedProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
