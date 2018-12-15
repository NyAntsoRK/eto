import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Todo {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todo = '';
  public todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000')
      .subscribe((data: Todo[]) => this.todos = data);
  }

  add() {
    this.todos.push({
      name: this.todo,
      checked: false
    });
    this.todo = '';
  }
}
