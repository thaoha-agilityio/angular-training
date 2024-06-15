import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

// Components
import { AvatarComponent, ButtonComponent, InputComponent } from '@/app/shared/components';
import { ArrowRightIconComponent, UploadIconComponent } from '@/app/shared/icons';

// Types
import { User } from '@/app/core/types';

// Service
import { UserService } from '../../services/user.service';
import { convertBase64, getFirstLetter, nameToColorHex } from '@/app/core/utils';
import { USER_STATUS } from '@/app/core/constants';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    ButtonComponent,
    ArrowRightIconComponent,
    InputComponent,
    UploadIconComponent,
    ReactiveFormsModule,
    AvatarComponent,
    NgIf,
    NgSwitch,
    NgSwitchCase,
  ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent implements OnInit, OnChanges {
  @Input() user!: User;

  @Output() closeEditForm: EventEmitter<void> = new EventEmitter<void>();

  userDetail: User = {} as User;
  editUser!: FormGroup;
  bgColor!: string;
  firstLetter!: string;
  isActiveStatus: boolean = false;
  base64Image: string = '';

  onCloseEditForm() {
    this.closeEditForm.emit();
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.userDetail = this.user;
    this.isActiveStatus = this.userDetail.status === USER_STATUS.ACTIVE ? true : false;

    // Bind data to form
    this.editUser = this.fb.group({
      fullName: [this.userDetail.fullName, [Validators.required]],
      email: [this.userDetail.email],
      status: [this.isActiveStatus],
      details: [this.userDetail.details],
    });

    // Image default
    this.bgColor = nameToColorHex(this.userDetail.fullName);
    this.firstLetter = getFirstLetter(this.userDetail.fullName);
  }

  // Method to handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      convertBase64(file)
        .then(base64 => {
          if (!base64) return;

          this.base64Image = base64;
          console.log('Base64 Image:', this.base64Image);
        })
        .catch(error => console.error('Error converting file to base64:', error));
    }
  }
}
