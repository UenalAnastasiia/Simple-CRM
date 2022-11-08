import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskMessageComponent } from './delete-task-message.component';

describe('DeleteTaskMessageComponent', () => {
  let component: DeleteTaskMessageComponent;
  let fixture: ComponentFixture<DeleteTaskMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTaskMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTaskMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
