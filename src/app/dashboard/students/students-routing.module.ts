import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { StudentDetailPageComponent } from './pages/student-detail-page/student-detail-page.component';

// localhost:4200/students...
const routes: Routes = [
  {
    path: '',
    component: StudentsPageComponent
  },
  {
    path: ':studentId',
    component: StudentDetailPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class StudentsRoutingModule { }
