import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkspacesLayoutComponent } from "./pages/workspaces-layout/workspaces-layout.component";
import { BoardComponent } from "./pages/board/board.component";
import { NotFoundPageComponent } from "src/app/shared/components/not-found-page/not-found-page.component";
const ROUTES:Routes=[
    {
        path:'',
        component:WorkspacesLayoutComponent,
        children:[
            {path:':id/:name',component:BoardComponent},
            {path:'404',component:NotFoundPageComponent},
            {path:'**',redirectTo:'404'}
        ]

    }
]
@NgModule( {
    imports:[RouterModule.forChild(ROUTES)],
    exports:[]

})
export class WorkspacesRoutingModule{

}