import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { authGuard } from './core/guards/auth.guard';
import { redirectGuard } from './core/guards/redirect.guard';

const routes: Routes = [
  {
    path:'auth',
    canActivate:[redirectGuard],
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'admin',
    canActivate:[authGuard],
    loadChildren:()=>import('./features/admin/boards.module').then(m=>m.BoardsModule)
  },
  {
    path:'b',
    canActivate:[authGuard],
    loadChildren:()=>import('./features/workspaces/workspaces.module').then(m=>m.WorkspacesModule)
  },
  {
    path:'',
    redirectTo:'auth',
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
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
