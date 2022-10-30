import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBoardComponent } from './time-board.component';

describe('TimeBoardComponent', () => {
  let component: TimeBoardComponent;
  let fixture: ComponentFixture<TimeBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
