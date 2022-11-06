import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskMessageComponent } from './add-task-message.component';

describe('AddTaskMessageComponent', () => {
  let component: AddTaskMessageComponent;
  let fixture: ComponentFixture<AddTaskMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
