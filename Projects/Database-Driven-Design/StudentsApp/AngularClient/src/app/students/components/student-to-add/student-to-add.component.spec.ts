import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentToAddComponent } from './student-to-add.component';

describe('StudentToAddComponent', () => {
  let component: StudentToAddComponent;
  let fixture: ComponentFixture<StudentToAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentToAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentToAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
