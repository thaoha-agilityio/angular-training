import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

// Components
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-base-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.css',
})
export class BaseModalComponent {
  @Input() title!: string;

  @ViewChild('closeBaseModal ') closeBaseModal!: ElementRef;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  onOverlayClick(event: MouseEvent): void {
    if (!this.closeBaseModal.nativeElement.contains(event.target)) {
      this.onClose();
    }
  }

  onClose() {
    this.closeModal.emit();
  }
}
