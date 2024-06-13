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

// Types
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
  bgColor = '';
  firstLetter = '';

  @Input() userDetail!: User;
  @Output() closeDetailModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() closeEditForm: EventEmitter<void> = new EventEmitter<void>();
  @Output() showEditForm: EventEmitter<void> = new EventEmitter<void>();

  ngOnChanges(): void {
    this.bgColor = nameToColorHex(this.userDetail.fullName);
    this.firstLetter = getFirstLetter(this.userDetail.fullName);
  }

  // Close detail modal
  handleClose() {
    this.closeDetailModal.emit();
  }

  // Show edit user form
  onshowEditForm() {
    this.showEditForm.emit();
  }

  // Close edit user form
  onCloseEditForm() {
    this.closeEditForm.emit();
  }
}
