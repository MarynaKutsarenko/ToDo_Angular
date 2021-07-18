import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../_interfaces/todo';
@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.scss']
})
export class TemplateTodoFormComponent implements OnInit {

  public toDo$: Todo;

  @Output() addNewTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
    this.toDo$ = {
      id: undefined,
      label: '',
      status: false,
      position: undefined
    }
   }
  
  public createToDo(event: any): void {
    this.addNewTodo.emit(this.toDo$);
    this.toDo$ = {
      id: undefined,
      label: '',
      status: false,
      position: undefined
    }
  }

  ngOnInit(): void {
  }

}
