import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardProductComponent} from "./modules/product/card-product/card-product.component";


const routes: Routes = [
  {path: 'search', component:CardProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
