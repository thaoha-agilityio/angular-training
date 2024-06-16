import { Component, EventEmitter, Output } from '@angular/core';

// Components
import { BaseModalComponent, ButtonComponent } from '@/app/shared/components';

@Component({
  selector: 'app-user-delete',
  standalone: true,
  imports: [BaseModalComponent, ButtonComponent],
  templateUrl: './user-delete.component.html',
  styleUrl: './user-delete.component.css',
})
export class UserDeleteComponent {
  @Output() closeDeleteModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteUser: EventEmitter<void> = new EventEmitter<void>();

  // Close delete modal
  onCloseDeleteModal() {
    this.closeDeleteModal.emit();
  }

  // delete user
  onDeleteUser() {
    this.deleteUser.emit();
  }
}
