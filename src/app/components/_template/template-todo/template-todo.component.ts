import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../_interfaces/todo';
import { Eventping } from '../../../_interfaces/eventping';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.scss']
})
export class TemplateTodoComponent implements OnInit {

  @Input()toDo$: Todo= {} as Todo;
  @Output()ping: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  public changeCheck(event?: any): void {
    this.toDo$.status = !this.toDo$.status;
    const eventObject: Eventping = {
      label: 'check',
      object: this.toDo$
    };
    this.ping.emit(eventObject);
  }

  public changeLabel(event?: any): void {
    this.toDo$.status = !this.toDo$.status;
    const eventObject: Eventping = {
      label: 'label',
      object: this.toDo$
    };
    this.ping.emit(eventObject);
  }
  
  public deleteTodo(event?: any): void {
    this.toDo$.status = !this.toDo$.status;
    const eventObject: Eventping = {
      label: 'delete',
      object: this.toDo$
    };
    this.ping.emit(eventObject);
  }

  ngOnInit(): void {}

}
