import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnDestroy {
  form = new FormGroup({
    first_name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    last_name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })
  user: User | null = null;
  private destroyed$ = new Subject();
  constructor(public readonly sessionService: SessionService) {
    this.sessionService.user$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => {
        if (user) {
          this.user = user
          this.form.patchValue(user);
        }
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  onSubmit() {
    if (this.user) {
      this.sessionService.updateSessionUser(this.form.value)
    }
  }
}
