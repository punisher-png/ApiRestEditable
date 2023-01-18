import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionsPageComponent } from './commissions-page.component';

describe('CommissionsPageComponent', () => {
  let component: CommissionsPageComponent;
  let fixture: ComponentFixture<CommissionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommissionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
