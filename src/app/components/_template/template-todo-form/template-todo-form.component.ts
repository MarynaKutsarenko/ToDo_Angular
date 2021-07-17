import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStoreService } from 'src/app/_services/dataStore.service';
import { Todo } from '../../../_interfaces/todo';
@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.scss']
})
export class TemplateTodoFormComponent implements OnInit {

  public toDo$: Todo;

  @Output() addNewTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private dataStoreService: DataStoreService) {
    this.toDo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    }
   }
  
  public createToDo(event: any): void {
    this.addNewTodo.emit(this.toDo$);
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
