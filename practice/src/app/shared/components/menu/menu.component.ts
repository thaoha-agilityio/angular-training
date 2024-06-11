import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';

// Components
import { ButtonComponent } from '..';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonComponent, NgIf],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  isShowAddUserModal!: boolean;

  @ViewChild('menu') menu!: ElementRef;
  @Output() closeMenuModal = new EventEmitter<void>();
  @Output() openAddUserModal = new EventEmitter<void>();

  onOverlayClick(event: MouseEvent): void {
    if (!this.menu.nativeElement.contains(event.target)) {
      this.closeModal();
    }
  }

  // Handle close menu modal
  closeModal(): void {
    this.closeMenuModal.emit();
  }

  // Handle show Add User modal
  onOpenAddUserModal(): void {
    this.openAddUserModal.emit();
  }
}
