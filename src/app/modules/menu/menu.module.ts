import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    MatIconModule,
    FormsModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class MenuModule { }
