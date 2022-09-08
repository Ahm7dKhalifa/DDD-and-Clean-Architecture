import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentToAddComponent } from './components/student-to-add/student-to-add.component';
import { StudentToUpdateComponent } from './components/student-to-update/student-to-update.component';
import { StudentToDeleteComponent } from './components/student-to-delete/student-to-delete.component';


@NgModule({
  declarations: [
    StudentsListComponent,
    StudentToAddComponent,
    StudentToUpdateComponent,
    StudentToDeleteComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
