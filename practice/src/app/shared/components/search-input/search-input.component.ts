import { Component, EventEmitter, Output } from '@angular/core';

// Components
import { ButtonComponent, InputComponent } from '..';
import { SearchIconComponent } from '../../icons';

@Component({
  standalone: true,
  selector: 'app-search-input',
  imports: [InputComponent, ButtonComponent, SearchIconComponent],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  @Output() closeModal = new EventEmitter<void>();

  close(): void {
    this.closeModal.emit();
  }
}
