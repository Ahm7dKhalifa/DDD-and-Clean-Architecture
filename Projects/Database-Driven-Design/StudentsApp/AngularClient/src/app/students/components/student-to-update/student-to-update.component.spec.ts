import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentToUpdateComponent } from './student-to-update.component';

describe('StudentToUpdateComponent', () => {
  let component: StudentToUpdateComponent;
  let fixture: ComponentFixture<StudentToUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentToUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentToUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
