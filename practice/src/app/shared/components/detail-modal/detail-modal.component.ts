import { Component, EventEmitter, Input, Output } from '@angular/core';

// Components
import { EditIconComponent } from '../../icons';

@Component({
  selector: 'app-detail-modal',
  standalone: true,
  imports: [EditIconComponent],
  templateUrl: './detail-modal.component.html',
  styleUrl: './detail-modal.component.css',
})
export class DetailModalComponent {
  @Input() title!: string;

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  handleClose() {
    this.closeModal.emit();
  }
}
