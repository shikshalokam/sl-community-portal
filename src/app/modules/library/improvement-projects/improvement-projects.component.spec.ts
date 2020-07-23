import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementProjectsComponent } from './improvement-projects.component';

describe('ImprovementProjectsComponent', () => {
  let component: ImprovementProjectsComponent;
  let fixture: ComponentFixture<ImprovementProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprovementProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovementProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
