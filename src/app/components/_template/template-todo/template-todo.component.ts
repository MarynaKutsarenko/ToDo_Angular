import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../_interfaces/todo';
@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.scss']
})
export class TemplateTodoComponent implements OnInit {

  public toDo$: Todo;

  constructor() {
      this.toDo$ = {
        id: 1,
        label: "",
        status: false,
        position: 1
      }
   }

  public changeCheck(event?: any): void {
    this.toDo$.status = !this.toDo$.status;
  }

  public changeLabel(event?: any): void {
    console.log(this.toDo$.label);
  }
  
  public deleteTodo(event?: any): void {
    console.log(this.toDo$.id);
  }

  ngOnInit(): void {
  }

}
