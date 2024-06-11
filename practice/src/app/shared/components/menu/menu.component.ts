import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

// Components
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @ViewChild('menu') menu!: ElementRef;
  @Output() closeMenuModal = new EventEmitter<void>();

  onOverlayClick(event: MouseEvent): void {
    if (!this.menu.nativeElement.contains(event.target)) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.closeMenuModal.emit();
  }
}
