import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefAgencyComponent } from './brief-agency.component';

describe('BriefAgencyComponent', () => {
  let component: BriefAgencyComponent;
  let fixture: ComponentFixture<BriefAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
