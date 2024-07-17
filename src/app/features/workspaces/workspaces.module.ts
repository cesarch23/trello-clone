import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { WorkspacesLayoutComponent } from './pages/workspaces-layout/workspaces-layout.component';
import { BoardComponent } from './pages/board/board.component';



@NgModule({
  declarations: [
    SidebarComponent,
    WorkspacesLayoutComponent,
    BoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkspacesModule { }
