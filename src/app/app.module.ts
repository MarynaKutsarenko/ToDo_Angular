import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateTodoComponent } from './components/_template/template-todo/template-todo.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { TemplateTodoFormComponent } from './components/_template/template-todo-form/template-todo-form.component';
import { DataStoreService } from './_services/dataStore.service';
import { TemplateHeaderComponent } from './components/_template/template-header/template-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateTodoComponent,
    TemplateTodoFormComponent,
    PageListComponent,
    TemplateHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ DataStoreService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
