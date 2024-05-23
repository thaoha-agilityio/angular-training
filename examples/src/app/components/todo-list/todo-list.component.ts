import { Component } from '@angular/core';
import { TodoListItem } from './todo-list-item.component';

@Component({
  standalone: true,
  imports: [TodoListItem],
  selector: 'TodoList',
  template: `
    <ul>
      <todo-list-item></todo-list-item>
    </ul>
    <p>{{ announcement }}</p>
    <button (click)="transformText()">Abracadabra!</button>
  `,
})
export class TodoList {
  announcement = 'Hello again Angular!';
  transformText() {
    this.announcement = this.announcement.toUpperCase();
  }
}
