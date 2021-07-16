import { Component, OnInit } from '@angular/core';
import { Todo } from '../../_interfaces/todo';
import { Eventping } from '../../_interfaces/eventping';

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

  constructor() {
    this.todoShow = true;
    this.todoDoneShow = false;
    this.$todos = [
      {
        id: 0,
        label: 'test',
        status: false,
        position: 1
      },
      {
        id: 1,
        label: 'test 2',
        status: false,
        position: 1
      }
    ];
  }

  ngOnInit(): void {
  }

}
