import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routing';
import { SharedModule } from '../shared/shared.module';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalAddComponent,
    ModalEditComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginatorComponent,
    ModalAddComponent
  ]
})
export class PagesModule { }
