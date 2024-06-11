import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { NgIf } from '@angular/common';

// Components
import { AvatarComponent, AvatarVariant, DetailModalComponent } from '@/app/shared/components';
import {
  ClockIconComponent,
  EmailIconComponent,
  ListIconComponent,
  ProfileIconComponent,
} from '@/app/shared/icons';
import { User } from '@/app/core/types';

// Utils
import { getFirstLetter, nameToColorHex } from '@/app/core/utils';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    NgIf,
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
export class UserDetailComponent implements OnChanges {
  variant: AvatarVariant = 'secondary';
  title = 'User information';
  bgColor!: string;

  @Input() userDetail!: User;
  @Output() closeDetailModal: EventEmitter<void> = new EventEmitter<void>();

  ngOnChanges(): void {
    this.bgColor = nameToColorHex(this.userDetail.fullName);
    this.firstLetter = getFirstLetter(this.userDetail.fullName);
  }

  handleClose() {
    this.closeDetailModal.emit();
  }
}
