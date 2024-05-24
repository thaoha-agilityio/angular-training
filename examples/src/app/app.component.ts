import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SizerComponent } from './sizer/sizer.component';
import { TodoList } from './components/todo-list/todo-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, SizerComponent, TodoList],
})
export class AppComponent {
  title = 'examples';
  fontSizePx = 16;
}
