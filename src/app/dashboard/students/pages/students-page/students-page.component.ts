import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models';
import { StudentModalComponent } from '../../components/student-modal/student-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import { Observable, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnDestroy {
  displayedColumns = ['id', 'firstName', 'lastName', 'active', 'delete', 'edit', 'viewDetail'];
  students: Observable<Student[]>;
  private destroyed$ = new Subject()

  constructor(private readonly studentsService: StudentsService, private readonly dialogService: MatDialog) {
    this.students = this.studentsService.students$;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  editStudent(element: Student) {
    const dialog = this.dialogService.open(StudentModalComponent, {
      data: element
    })
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.editStudent(element.id, data);
      }
    })
  }

  createStudent() {
    const dialog = this.dialogService.open(StudentModalComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.createStudent({ firstName: data.firstName, lastName: data.lastName });
      }
    })
  }

  deleteStudent(element: Student) {
    this.studentsService.removeStudent(element.id);
  }
}
