import { Routes } from '@angular/router';

import { TodoList } from './components/todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoList,
  },
];
