import { Component, OnInit } from '@angular/core';
import { Todo } from '../../_interfaces/todo';
import { Eventping } from '../../_interfaces/eventping';
import { DoYourStuff } from 'src/app/db/data';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  public todoShow: boolean = true;
  public todoDoneShow: boolean = false;
  public $todos: Todo[] = DoYourStuff;
  public $todosDone: Todo[] = [];

  constructor() {
    this.todoShow = true;
    this.todoDoneShow = false;
  }

  ngOnInit(): void {
  }

  public create(event: Todo): void {
    event.position = this.$todos.length + 1;
    this.$todos.push(event);
  }

  public update(event: Eventping): void {
    if ('check' == event.label) {
      if (!event.object.status) {
        this.$todosDone.splice(this.$todosDone.indexOf(event.object), 1);
        this.$todos.push(event.object);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
        this.$todosDone.push(event.object);
      }
    }

    if ('delete' === event.label) {
      if (event.object.status) {
        this.$todosDone.splice(this.$todosDone.indexOf(event.object), 1);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
      }
    }

    if ('label' === event.label) {
      if (event.object.status) {
        this.$todosDone.forEach((toDo: Todo) => {
          if (toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      } else {
        this.$todos.forEach((toDo: Todo) => {
          if (toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      }
    }
  }

}
