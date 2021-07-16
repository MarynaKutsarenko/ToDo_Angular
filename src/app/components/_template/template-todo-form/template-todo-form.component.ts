import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../../_interfaces/todo';
@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.scss']
})
export class TemplateTodoFormComponent implements OnInit {

  @Input() toDo!: Todo;

  constructor() {}
  
  public createToDo(event?: any): void {
    console.log(this.toDo);
    this.toDo = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    }
  }

  ngOnInit(): void {
  }

}
