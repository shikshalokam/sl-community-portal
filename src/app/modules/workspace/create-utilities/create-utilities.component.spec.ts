import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtilitiesComponent } from './create-utilities.component';

describe('CreateUtilitiesComponent', () => {
  let component: CreateUtilitiesComponent;
  let fixture: ComponentFixture<CreateUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
