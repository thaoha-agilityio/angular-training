import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
  // template: ` <p>Title: {{ taskTitle }}</p>
  //   @if (isAdmin) {
  //   <button>Erase database</button>
  //   }`,
})
export class TodoListItem {
  // taskTitle = '';
  isAdmin = true;
  taskTitle = 'Read cup of coffee';

  todoList = [
    { name: 'noodles', task: '1' },
    { name: 'miso broth', task: '1' },
    { name: 'egg', task: '2' },
  ];
}
