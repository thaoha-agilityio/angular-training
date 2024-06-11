import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

// Components
import { ButtonComponent, MenuComponent } from '@/app/shared/components';
import { UserIconComponent } from '@/app/shared/icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [UserIconComponent, ButtonComponent, MenuComponent, NgIf],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  pathname!: string;
  isShowMenu!: boolean;

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
}
