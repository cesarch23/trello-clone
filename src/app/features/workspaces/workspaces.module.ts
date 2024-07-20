import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardComponent } from './pages/board/board.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { WorkspacesLayoutComponent } from './pages/workspaces-layout/workspaces-layout.component';
import { WorkspacesRoutingModule } from './workspaces-routing.module';

import  {  FontAwesomeModule  } from '@fortawesome/angular-fontawesome'
import { SharedModule } from 'src/app/shared/shared.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarComponent,
    WorkspacesLayoutComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FontAwesomeModule,
    SharedModule,
    WorkspacesRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class WorkspacesModule { }
