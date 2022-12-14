import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: 'crud',
        component: PagesComponent,
    },
    {
        path: 'crud/page/:page',
        component: PagesComponent
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }