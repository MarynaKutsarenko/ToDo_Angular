import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateTodoComponent } from './components/_template/template-todo/template-todo.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { TemplateTodoFormComponent } from './components/_template/template-todo-form/template-todo-form.component';
import { TemplateHeaderComponent } from './components/_template/template-header/template-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateTodoComponent,
    PageListComponent,
    TemplateTodoFormComponent,
    TemplateHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
