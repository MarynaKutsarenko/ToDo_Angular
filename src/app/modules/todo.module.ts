import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateTodoComponent } from '../components/_template/template-todo/template-todo.component';
import { PageListComponent } from '../components/page-list/page-list.component';
import { TemplateTodoFormComponent } from '../components/_template/template-todo-form/template-todo-form.component';
import { TemplateHeaderComponent } from '../components/_template/template-header/template-header.component';


@NgModule({
  declarations: [
    PageListComponent,
    TemplateTodoComponent,
    TemplateTodoFormComponent,
    TemplateHeaderComponent
  ],
  exports: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TodoModule { }
