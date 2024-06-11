import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

// Components
import { ButtonComponent, MenuComponent } from '@/app/shared/components';
import { UserIconComponent } from '@/app/shared/icons';
import { UserCreateComponent } from '@/app/user/components';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [UserIconComponent, ButtonComponent, MenuComponent, NgIf, UserCreateComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  pathname!: string;
  isShowMenu!: boolean;
  isShowAddUserModal!: boolean;

  constructor(private router: Router) {
    this.pathname = this.router.url || '/';
  }

  isActive(href: string): boolean {
    return this.pathname.includes(href);
  }

  openMenuModal(): void {
    this.isShowMenu = true;
  }

  closeMenuModal(): void {
    this.isShowMenu = false;
  }

  // Handle show Add User modal
  openAddUserModal(): void {
    this.isShowAddUserModal = true;
    this.closeMenuModal();
  }

  // Handle close Add User modal
  closeAddUserModal(): void {
    this.isShowAddUserModal = false;
  }
}
