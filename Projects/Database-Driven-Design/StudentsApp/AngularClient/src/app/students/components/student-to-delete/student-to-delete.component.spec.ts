import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentToDeleteComponent } from './student-to-delete.component';

describe('StudentToDeleteComponent', () => {
  let component: StudentToDeleteComponent;
  let fixture: ComponentFixture<StudentToDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentToDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentToDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
