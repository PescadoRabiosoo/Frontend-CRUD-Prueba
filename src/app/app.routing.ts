import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from "./pages/pages.routing";

const routes: Routes = [
    { path: '', redirectTo: '/crud', pathMatch: 'full' }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        PagesRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }