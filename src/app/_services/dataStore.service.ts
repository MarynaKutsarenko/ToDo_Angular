import { Injectable } from '@angular/core';
import { Todo } from '../_interfaces/todo';
import { Observable } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private _http:  HttpClientModule) { }

}
