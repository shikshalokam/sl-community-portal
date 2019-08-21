import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFooterComponent } from './community-footer.component';

describe('CommunityFooterComponent', () => {
  let component: CommunityFooterComponent;
  let fixture: ComponentFixture<CommunityFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
