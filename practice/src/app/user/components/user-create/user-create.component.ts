import { Component, EventEmitter, Output } from '@angular/core';

import { BaseModalComponent } from '@/app/shared/components';
@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [BaseModalComponent],
  templateUrl: './user-create.component.html',
})
export class UserCreateComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
