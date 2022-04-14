import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TodoModel } from 'src/app/models/api/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSecondTodo() {
    return this.http.get<TodoModel[]>('https://gorest.co.in/public/v2/todos').pipe(
      map(data => data.filter(todo => todo.status === 'pending')[1])
    )
  }
}
