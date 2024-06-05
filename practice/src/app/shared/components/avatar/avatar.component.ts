import { Component, Input } from '@angular/core';

export type AvatarVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent {
  @Input() url!: string;
  @Input() variant: AvatarVariant = 'primary';

  getClasses(): string {
    return ['object-cover', `avatar--${this.variant}`].join(' ');
  }
}
