import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

// Component
import { BaseModalComponent, ButtonComponent, InputComponent } from '@/app/shared/components';

// Service
import { UserService } from '../../services/user.service';
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

  errorMessage: string = '';

  createUser = new FormGroup({
    fullName: new FormControl('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.createUser.valid) {
      this.userService.post(this.createUser.value).subscribe(() => {
        console.log('123');
      });
    }
  }
}
