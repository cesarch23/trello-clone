import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:'login',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./features/admin/boards.module').then(m=>m.BoardsModule)
  },
  {
    path:'b',
    loadChildren:()=>import('./features/workspaces/workspaces.module').then(m=>m.WorkspacesModule)
  },
  {
    path:'',
    redirectTo:'admin',
    //esto es mandatorio ojo si cambia a login
    pathMatch:'full'
  },
  {
    path:'404',
    component:NotFoundPageComponent
  },
  {
    path:'**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
