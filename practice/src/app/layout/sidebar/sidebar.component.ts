import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Components
import { ButtonComponent } from '@/app/shared/components';
import { UserIconComponent } from '@/app/shared/icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [UserIconComponent, ButtonComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  pathname!: string;

  constructor(private router: Router) {
    this.pathname = this.router.url || '/';
  }

  isActive(href: string): boolean {
    return this.pathname.includes(href);
  }
}
