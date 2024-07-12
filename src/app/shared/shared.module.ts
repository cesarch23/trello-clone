import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    BtnComponent,
    NotFoundPageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BtnComponent,
    NotFoundPageComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
