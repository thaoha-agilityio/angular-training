import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Constants
import { USER_STATUS } from '@/app/core/constants';

// Types
import { Cell } from '@/app/core/types';
import { User } from '@/app/core/types/user';

// Components
import { AvatarComponent, SearchInputComponent, TableComponent } from '@/app/shared/components';
import { SearchIconComponent } from '@/app/shared/icons';

// Services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  imports: [
    TableComponent,
    AvatarComponent,
    SearchInputComponent,
    SearchIconComponent,
    NgIf,
    HttpClientModule,
  ],
  providers: [UserService],
})
export class UserComponent implements OnInit {
  isModalOpen = false;

  columns: Cell[] = [
    {
      key: 'avatar',
      title: 'avatar',
      widthPercent: 7,
    },
    {
      key: 'fullName',
      title: 'Full Name',
      widthPercent: 33,
    },
    {
      key: 'status',
      title: 'Status',
      widthPercent: 20,
      renderCustomCell: this.renderCustomStatusUser,
    },
    {
      key: 'email',
      title: 'Email',
      widthPercent: 40,
    },
  ];

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserList().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  // Handle show search input component
  openModal(): void {
    this.isModalOpen = true;
  }

  // Handle close search input component
  closeModal(): void {
    this.isModalOpen = false;
  }

  // Render status user
  renderCustomStatusUser(status: USER_STATUS) {
    const className =
      status === USER_STATUS.ACTIVE
        ? 'text-textActiveStatus bg-bgActiveStatus'
        : 'text-textInactiveStatus bg-bgInactiveStatus';
    const text = status === USER_STATUS.ACTIVE ? 'Active' : 'Not active';

    return `<p class="text-base w-fit px-2 py-[2px] rounded-md ${className}">${text}</p>`;
  }
}
