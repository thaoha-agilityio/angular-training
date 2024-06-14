import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Components
import { ButtonComponent, InputComponent } from '@/app/shared/components';
import { ArrowRightIconComponent, UploadIconComponent } from '@/app/shared/icons';

// Types
import { User } from '@/app/core/types';

// Service
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    ButtonComponent,
    ArrowRightIconComponent,
    InputComponent,
    UploadIconComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent implements OnInit, OnChanges {
  @Input() user!: User;

  @Output() closeEditForm: EventEmitter<void> = new EventEmitter<void>();

  userDetail: User = {} as User;

  editUser!: FormGroup;

  onCloseEditForm() {
    this.closeEditForm.emit();
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.editUser = this.fb.group({
      fullName: [this.user.fullName, [Validators.required]],
      email: [this.user.email],
    });
  }

  ngOnChanges(): void {
    this.userDetail = this.user;

    this.editUser = this.fb.group({
      fullName: [this.user.fullName, [Validators.required]],
      email: [this.user.email],
    });
  }
}
