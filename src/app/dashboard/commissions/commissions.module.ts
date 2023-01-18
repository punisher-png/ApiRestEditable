import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionsPageComponent } from './pages/commissions-page/commissions-page.component';
import { CommissionsRoutingModule } from './commissions-routing.module';



@NgModule({
  declarations: [
    CommissionsPageComponent
  ],
  imports: [
    CommonModule,
    CommissionsRoutingModule,
  ]
})
export class CommissionsModule { }
