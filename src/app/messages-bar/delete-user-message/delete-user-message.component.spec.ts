import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserMessageComponent } from './delete-user-message.component';

describe('DeleteUserMessageComponent', () => {
  let component: DeleteUserMessageComponent;
  let fixture: ComponentFixture<DeleteUserMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
