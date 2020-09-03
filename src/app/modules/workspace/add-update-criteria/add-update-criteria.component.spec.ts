import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCriteriaComponent } from './add-update-criteria.component';

describe('AddUpdateCriteriaComponent', () => {
  let component: AddUpdateCriteriaComponent;
  let fixture: ComponentFixture<AddUpdateCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
