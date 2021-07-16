import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../_interfaces/todo';
@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.scss']
})
export class TemplateTodoFormComponent implements OnInit {

  public toDo$: Todo;

  @Output() ping: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
    this.toDo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    }
   }
  
  public createToDo(event?: any): void {
    this.ping.emit(this.toDo$)
    this.toDo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    }
  }

  ngOnInit(): void {
  }

}
