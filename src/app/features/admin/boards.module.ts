import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsLayoutComponent } from './pages/boards-layout/boards-layout.component';
import { BoardComponent } from './components/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import {CdkAccordionModule} from '@angular/cdk/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplatesComponent } from './pages/templates/templates.component';
import { HomeComponent } from './pages/home/home.component'


@NgModule({
  declarations: [
    BoardsLayoutComponent,
    BoardComponent,
    BoardsComponent,
    SidenavComponent,
    TemplatesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    SharedModule,
    CdkAccordionModule,
    FontAwesomeModule
    
  ]
})
export class BoardsModule { }
