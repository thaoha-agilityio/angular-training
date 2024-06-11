import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';

// Components
import { ButtonComponent } from '..';
import { UserCreateComponent } from '@/app/user/components/user-create/user-create.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonComponent, NgIf, UserCreateComponent],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  isShowAddUserModal!: boolean;

  @ViewChild('menu') menu!: ElementRef;
  @Output() closeMenuModal = new EventEmitter<void>();

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
  openAddUserModal(): void {
    this.isShowAddUserModal = true;
  }

  // Handle close Add User modal
  closeAddUserModal(): void {
    this.isShowAddUserModal = false;
  }
}
