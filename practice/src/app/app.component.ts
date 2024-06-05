import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseModalComponent } from './shared/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoading: boolean = false;
  description = 'description';
  textCancel = 'cancel';
  textSubmit = 'submit';
  title = 'title';

  constructor() {}

  closeModal() {
    // Handle close modal logic
  }

  submitModal() {
    // Handle submit modal logic
    this.isLoading = true;
    // Perform any async task here
    setTimeout(() => {
      this.isLoading = false;
      // Additional logic after async task completes
    }, 2000);
  }
}
