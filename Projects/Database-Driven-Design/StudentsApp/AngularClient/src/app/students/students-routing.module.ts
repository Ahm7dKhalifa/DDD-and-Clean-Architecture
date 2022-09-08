import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentToAddComponent } from './components/student-to-add/student-to-add.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  {path  : "studentsList" , component: StudentsListComponent} ,
  {path  : "addNewStudent" , component: StudentToAddComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
