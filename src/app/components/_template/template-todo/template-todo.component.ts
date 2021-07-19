import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../_interfaces/todo';
import { EventTodo } from '../../../_interfaces/eventping';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.scss']
})
export class TemplateTodoComponent implements OnInit {

  @Input()toDo$: Todo= {} as Todo;
  @Output()addNewTodo: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  public changeCheck(event: any): void {
    this.toDo$.status = !this.toDo$.status;
    const eventObject: EventTodo = {
      label: 'check',
      object: this.toDo$
    };
    this.addNewTodo.emit(eventObject);
  }

  public changeLabel(event: any): void {
    const eventObject: EventTodo = {
      label: 'label',
      object: this.toDo$
    };
    this.addNewTodo.emit(eventObject);
  }
  
  public deleteTodo(event: any): void {
    const eventObject: EventTodo = {
      label: 'delete',
      object: this.toDo$
    };
    this.addNewTodo.emit(eventObject);
  }

  ngOnInit(): void {}

}
