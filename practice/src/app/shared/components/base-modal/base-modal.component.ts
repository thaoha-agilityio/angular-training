import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Components
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-base-modal',
  standalone: true,
  imports: [NgIf, ButtonComponent],
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.css',
})
export class BaseModalComponent {
  @Input() title!: string;

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  handleClose() {
    this.closeModal.emit();
  }
}
