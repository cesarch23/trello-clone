import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsLayoutComponent } from './pages/boards-layout/boards-layout.component';
import { BoardComponent } from './components/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BoardsLayoutComponent,
    BoardComponent,
    BoardsComponent
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    // OJO SHARED ESTA LLAMADO POR TODOS LOS MODULOS
    SharedModule,
  ]
})
export class BoardsModule { }
