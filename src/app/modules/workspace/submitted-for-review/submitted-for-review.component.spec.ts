import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedForReviewComponent } from './submitted-for-review.component';

describe('SubmittedForReviewComponent', () => {
  let component: SubmittedForReviewComponent;
  let fixture: ComponentFixture<SubmittedForReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedForReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedForReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
