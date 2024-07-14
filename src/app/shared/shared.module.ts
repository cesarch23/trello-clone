import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayWorkspacesComponent } from './components/navbar/components/overlay-workspaces/overlay-workspaces.component';


@NgModule({
  declarations: [
    BtnComponent,
    NotFoundPageComponent,
    NavbarComponent,
    OverlayWorkspacesComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    FontAwesomeModule,
  ],
  exports:[
    BtnComponent,
    NotFoundPageComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
