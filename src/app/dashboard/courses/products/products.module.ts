import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductsModule { }
