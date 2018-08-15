import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierGeneralComponent } from './calendrier-general.component';

describe('CalendrierGeneralComponent', () => {
  let component: CalendrierGeneralComponent;
  let fixture: ComponentFixture<CalendrierGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendrierGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
