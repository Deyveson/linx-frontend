import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardProductComponent} from "./modules/product/card-product/card-product.component";
import {NotFoundComponent} from "./modules/errors/not-found/not-found.component";


const routes: Routes = [
  {path: 'search', component:CardProductComponent},
  {path: 'bad', component:NotFoundComponent},
  {path: '**',  redirectTo:  'bad'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
