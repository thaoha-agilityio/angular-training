import { Component } from '@angular/core';

// Components
import { AvatarComponent, AvatarVariant, DetailModalComponent } from '@/app/shared/components';
import {
  ClockIconComponent,
  EmailIconComponent,
  ListIconComponent,
  ProfileIconComponent,
} from '@/app/shared/icons';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    DetailModalComponent,
    AvatarComponent,
    EmailIconComponent,
    ClockIconComponent,
    ProfileIconComponent,
    ListIconComponent,
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  variant: AvatarVariant = 'secondary';
}
