import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// Component
import { BaseModalComponent, ButtonComponent, InputComponent } from '@/app/shared/components';

// Service
import { UserService } from '../../services/user.service';

// Types
import { User } from '@/app/core/types';

// Constants
import { USER_STATUS } from '@/app/core/constants';

// Utils
import { formatDateTime } from '@/app/core/utils';

// Constants
import { REGEX } from '@/app/core/constants';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [BaseModalComponent, InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './user-create.component.html',
})
export class UserCreateComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }

  createUser!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.createUser = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(REGEX.ONLY_BLANK_SPACES)]],
    });
  }

  onSubmit(): void {
    const fullName = this.createUser.get('fullName')?.value;

    const value = {
      fullName: fullName.trim(),
      avatar: '',
      email: '',
      createDate: formatDateTime(),
      status: USER_STATUS.INACTIVE,
    } as User;

    this.userService.post(value).subscribe(() => {
      this.onClose();
    });

    this.userService.getList();
  }
}
