import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditPersonalInfoComponent } from './dialog-edit-personal-info.component';

describe('DialogEditPersonalInfoComponent', () => {
  let component: DialogEditPersonalInfoComponent;
  let fixture: ComponentFixture<DialogEditPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditPersonalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
