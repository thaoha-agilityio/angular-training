import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SizerComponent } from './sizer/sizer.component';
import { TodoList } from './components/todo-list/todo-list.component';
import { CustomSlider } from './slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, SizerComponent, TodoList, CustomSlider],
})
export class AppComponent {
  title = 'examples';
  fontSizePx = 16;
  systemVolume: string | undefined;
}
