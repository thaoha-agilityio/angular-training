import { Component } from '@angular/core';

// Components
import { ButtonComponent, InputComponent } from '@/app/shared/components';
import { ArrowRightIconComponent } from '@/app/shared/icons';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ButtonComponent, ArrowRightIconComponent, InputComponent],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent {}
