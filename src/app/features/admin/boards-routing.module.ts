import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsLayoutComponent } from './pages/boards-layout/boards-layout.component';
import { BoardComponent } from './components/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:BoardsLayoutComponent,
    children:[
      {path:'boards', component:BoardsComponent},
      {path:'templates', component:TemplatesComponent},
      {path:'home', component:HomeComponent},
      {path:'**', redirectTo:'boards'}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
