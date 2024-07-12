import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsLayoutComponent } from './pages/boards-layout/boards-layout.component';
import { BoardComponent } from './components/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';

const routes: Routes = [
  {
    path:'',
    component:BoardsLayoutComponent,
    children:[
      {path:'my-boards', component:BoardsComponent},
      {path:'**', redirectTo:'my-boards'}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
