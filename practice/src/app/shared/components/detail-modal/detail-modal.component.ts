import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

// Components
import { EditIconComponent } from '../../icons';

// Constants
import { USER_STATUS } from '@/app/core/constants';

@Component({
  selector: 'app-detail-modal',
  standalone: true,
  imports: [EditIconComponent, NgIf],
  templateUrl: './detail-modal.component.html',
  styleUrl: './detail-modal.component.css',
})
export class DetailModalComponent {
  activeStatus = USER_STATUS.ACTIVE;

  @Input() title!: string;
  @Input() status?: USER_STATUS;

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() showEditForm: EventEmitter<void> = new EventEmitter<void>();

  handleClose() {
    this.closeModal.emit();
  }

  onShowEditForm() {
    this.showEditForm.emit();
  }
}
