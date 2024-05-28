import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe, UpperCasePipe } from '@angular/common';

import { SizerComponent } from './sizer/sizer.component';
import { TodoList } from './components/todo-list/todo-list.component';
import { CustomSlider } from './slider/slider.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    SizerComponent,
    TodoList,
    CustomSlider,
    NavBarComponent,
    DatePipe,
    UpperCasePipe,
  ],
})
export class AppComponent {
  announcement = 'Hello again Angular!';
  updateInput() {
    this.announcement = this.announcement.toUpperCase();
  }

  birthday = new Date();

  title = 'examples';
  fontSizePx = 16;
  systemVolume: string | undefined;
  sliderDisabled: any;

  items = ['item1', 'item2'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
