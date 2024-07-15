import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayWorkspacesComponent } from './components/navbar/components/overlay-workspaces/overlay-workspaces.component';
import { RecentsStarredComponent } from './components/navbar/components/recents-starred/recents-starred.component';
import { OverlayTemplateComponent } from './components/navbar/components/overlay-template/overlay-template.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';


@NgModule({
  declarations: [
    BtnComponent,
    NotFoundPageComponent,
    NavbarComponent,
    OverlayWorkspacesComponent,
    RecentsStarredComponent,
    OverlayTemplateComponent,
    
  ],
  imports: [
    CommonModule,
    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
  ],
  exports:[
    BtnComponent,
    NotFoundPageComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
