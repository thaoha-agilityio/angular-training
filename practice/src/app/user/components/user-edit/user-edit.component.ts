import { Component, EventEmitter, Output } from '@angular/core';

// Components
import { ButtonComponent, InputComponent } from '@/app/shared/components';
import { ArrowRightIconComponent, UploadIconComponent } from '@/app/shared/icons';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ButtonComponent, ArrowRightIconComponent, InputComponent, UploadIconComponent],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent {
  @Output() closeEditForm: EventEmitter<void> = new EventEmitter<void>();

  onCloseEditForm() {
    this.closeEditForm.emit();
  }
}
