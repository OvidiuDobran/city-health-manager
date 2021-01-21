import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleDefinitionComponent } from './news-article-definition.component';

describe('NewsArticleDefinitionComponent', () => {
  let component: NewsArticleDefinitionComponent;
  let fixture: ComponentFixture<NewsArticleDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArticleDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticleDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
