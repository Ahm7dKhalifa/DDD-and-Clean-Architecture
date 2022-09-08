import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsRoutingModule } from './students/students-routing.module';

import { StudentsListComponent } from './students/components/students-list/students-list.component';

const routes: Routes = [
  {path  : "" , component: StudentsListComponent} 
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StudentsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
