import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

// Components
import { AvatarComponent, ButtonComponent, InputComponent } from '@/app/shared/components';
import { ArrowRightIconComponent, UploadIconComponent } from '@/app/shared/icons';

// Types
import { User } from '@/app/core/types';

// Service
import { UserService } from '../../services/user.service';

// Utils
import {
  convertBase64,
  getFirstLetter,
  nameToColorHex,
  processMessages,
  ObjectWithTypeCheck,
} from '@/app/core/utils';

// Constants
import { ERROR_MESSAGES, REGEX, USER_STATUS } from '@/app/core/constants';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditComponent implements OnChanges {
  @Input() user!: User;

  @Output() closeEditForm: EventEmitter<void> = new EventEmitter<void>();

  userDetail: User = {} as User;
  editUser!: FormGroup;
  bgColor!: string;
  firstLetter!: string;
  isActiveStatus!: boolean;
  base64Image!: string;
  successMessage?: string;
  validationMessages: ObjectWithTypeCheck = {};

  // Message
  VALIDATION_MESSAGES: ObjectWithTypeCheck = {
    fullName: {
      required: ERROR_MESSAGES.FIELD_REQUIRED('Full name'),
      pattern: ERROR_MESSAGES.ONLY_BLANK_SPACES,
    },
    email: {
      pattern: ERROR_MESSAGES.EMAIL_INVALID,
    },
  };

  onCloseEditForm() {
    this.closeEditForm.emit();
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  private initializeForm(): void {
    this.editUser = this.fb.group({
      fullName: [
        this.userDetail.fullName,
        [Validators.required, Validators.pattern(REGEX.ONLY_BLANK_SPACES)],
      ],
      email: [this.userDetail.email, [Validators.pattern(REGEX.CHECK_EMAIL)]],
      status: [this.isActiveStatus],
      details: [this.userDetail.details],
      avatar: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && changes['user'].currentValue) {
      // Reset the base64Image when a new user is selected
      this.base64Image = '';

      this.userDetail = this.user;
      this.isActiveStatus = this.userDetail.status === USER_STATUS.ACTIVE ? true : false;

      // Image default
      this.bgColor = nameToColorHex(this.userDetail.fullName);
      this.firstLetter = getFirstLetter(this.userDetail.fullName);

      // Update form with new user data
      this.initializeForm();
    }
  }

  // Toggle status
  toggleStatus(event: Event) {
    const input = event.target as HTMLInputElement;
    this.isActiveStatus = input.checked;
    this.editUser.patchValue({ status: this.isActiveStatus });
  }

  // Method to handle file selection
  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const base64 = await convertBase64(file);

      if (!base64) return;

      this.base64Image = base64;

      // Manually trigger change detection to update the view
      this.cdr.detectChanges();

      // Reset the input value to allow the same file to be selected again
      input.value = '';
    }
  }

  editSuccess() {
    this.successMessage = 'Done';

    // Clear validation messages on success
    this.validationMessages = {};
    this.cdr.detectChanges();

    setTimeout(() => {
      this.successMessage = '';
      // Trigger change detection to remove message from UI
      this.cdr.detectChanges();
    }, 3000);
  }

  // Handle submit form
  onSubmit(): void {
    if (this.editUser.valid) {
      const value = {
        ...this.editUser.value,
        avatar: this.base64Image || this.userDetail.avatar || '',
        status: this.isActiveStatus ? USER_STATUS.ACTIVE : USER_STATUS.INACTIVE,
      };

      this.userService.editUser(this.userDetail.id, value).subscribe({
        next: () => this.editSuccess(),
        error: (error: HttpErrorResponse) => {
          console.log('error', error.message);
        },
      });
    } else {
      this.validationMessages = processMessages(this.editUser, this.VALIDATION_MESSAGES);
    }
  }
}
