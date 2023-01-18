import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { StudentDetailPageComponent } from './pages/student-detail-page/student-detail-page.component';
import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentsPageComponent,
    StudentDetailPageComponent,
    StudentModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentsRoutingModule,
    SharedModule,
    MatTableModule,
  ]
})
export class StudentsModule { }
