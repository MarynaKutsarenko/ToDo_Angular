import { Component, OnInit } from '@angular/core';
import { Todo } from '../../_interfaces/todo';
import { Eventping } from '../../_interfaces/eventping';
import { DataStoreService } from 'src/app/_services/dataStore.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  public todoShow: boolean = true;
  public todoDoneShow: boolean = false;
  public $todos: Todo[];
  public $todosDone!: Todo[];

  constructor(public dataStoreService: DataStoreService) {
    this.todoShow = true;
    this.todoDoneShow = false;
    this.$todos = [];
    this.$todosDone = [];
  }

  ngOnInit(): void {
  }

  public create(event: Todo): void {
    console.log(event);
    
    event.position = this.$todos.length + 1;
    this.$todos.push(event);
  }

  public update(event: Eventping): void {
    if ('check' == event.label) {
      console.log(`"${event.label}"`);
      if (!event.object.status) {
        this.$todosDone.splice(this.$todosDone.indexOf(event.object), 1);
        this.$todos.push(event.object);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
        this.$todosDone.push(event.object);
      }
    }

    if ('delete' === event.label) {
      console.log(`${event.label}`);
      if (event.object.status) {
        this.$todosDone.splice(this.$todosDone.indexOf(event.object), 1);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
      }
    }

    if ('label' === event.label) {
      console.log(`${event.label}`);
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
    console.log(this.$todos);
  }

}
