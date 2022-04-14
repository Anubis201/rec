import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/api/todo.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  data: TodoModel | null = null

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getSecondTodo().subscribe({
      next: data => this.data = data,
      error: () => alert('Nie udało się pobrać danych')
    })
  }
}
