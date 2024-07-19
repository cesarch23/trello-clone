import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { WorkspacesLayoutComponent } from './pages/workspaces-layout/workspaces-layout.component';
import { BoardComponent } from './pages/board/board.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkspacesRoutingModule } from './workspaces-routing.module';
import  {  FontAwesomeModule  } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [
    SidebarComponent,
    WorkspacesLayoutComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    WorkspacesRoutingModule,
    SharedModule,
    FontAwesomeModule,
  ]
})
export class WorkspacesModule { }
