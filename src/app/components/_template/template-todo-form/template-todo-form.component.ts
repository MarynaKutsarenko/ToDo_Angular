import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Todo } from '../../../_interfaces/todo';
@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.scss']
})
export class TemplateTodoFormComponent implements OnInit {

  public toDo$: Todo;
  public id: number=0;

  @Output() addNewTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
    this.toDo$ = {
      id: this.id++,
      label: '',
      status: false,
      position: 0
    }
   }
  
  public createToDo(event: any): void {
    this.addNewTodo.emit(this.toDo$);
    this.toDo$ = {
      id: this.id++,
      label: '',
      status: false,
      position: 0
    };
    
  }

  ngOnInit(): void {
  }

}
