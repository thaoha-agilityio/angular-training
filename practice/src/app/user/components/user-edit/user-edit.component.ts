import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  ValidationMessages,
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
export class UserEditComponent implements OnInit, OnChanges {
  @Input() user!: User;

  @Output() closeEditForm: EventEmitter<void> = new EventEmitter<void>();

  userDetail: User = {} as User;
  editUser!: FormGroup;
  bgColor!: string;
  firstLetter!: string;
  isActiveStatus: boolean = false;
  base64Image: string = '';

  validationMessages: { [key: string]: string } = {};

  // Message
  VALIDATION_MESSAGES: ValidationMessages = {
    fullName: {
      required: ERROR_MESSAGES.FIELD_REQUIRED('Email'),
      pattern: ERROR_MESSAGES.ONLY_BLANK_SPACES,
    },
    email: {
      pattern: ERROR_MESSAGES.EMAIL_INVALID,
    },
  };
  successMessage: any;

  onCloseEditForm() {
    this.closeEditForm.emit();
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  private initializeForm(): void {
    this.editUser = this.fb.group({
      fullName: [
        this.userDetail.fullName,
        [Validators.required, Validators.pattern(REGEX.ONLY_BLANK_SPACES)],
      ],
      email: [this.userDetail.email, [Validators.pattern(REGEX.CHECK_EMAIL)]],
      status: [this.isActiveStatus],
      details: [this.userDetail.details],
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

  // Handle submit form
  onSubmit(): void {
    if (this.editUser.valid) {
      const value = {
        ...this.editUser.value,
        avatar: this.base64Image || this.userDetail.avatar || '',
        status: this.isActiveStatus ? USER_STATUS.ACTIVE : USER_STATUS.INACTIVE,
      };

      this.userService.editUser(this.userDetail.id, value).subscribe(() => {
        this.successMessage = 'Done';
        this.cdr.detectChanges();

        setTimeout(() => {
          this.successMessage = null;
          this.cdr.detectChanges(); // Trigger change detection to remove message from UI
        }, 3000);
      });
    } else {
      this.validationMessages = processMessages(this.editUser, this.VALIDATION_MESSAGES);
    }
  }
}
