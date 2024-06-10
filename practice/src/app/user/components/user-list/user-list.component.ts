import { Subject, debounceTime, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Constants
import { USER_STATUS } from '@/app/core/constants';

// Types
import { Cell, User } from '@/app/core/types';

// Components
import { AvatarComponent, SearchInputComponent, TableComponent } from '@/app/shared/components';
import { SearchIconComponent } from '@/app/shared/icons';
import { UserDetailComponent } from '../user-detail/user-detail.component';

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
    UserDetailComponent,
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

  private searchTerms = new Subject<string>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getList().subscribe((data: User[]) => {
      this.users = data;
    });

    this.searchTerms
      .pipe(
        debounceTime(800),
        switchMap((term: string) => this.userService.searchUserByName(term))
      )
      .subscribe((data: User[]) => {
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
    const className = status === USER_STATUS.ACTIVE ? 'status--active' : 'status--inactive';
    const text = status === USER_STATUS.ACTIVE ? 'Active' : 'Not active';

    return `<p class="status ${className}">${text}</p>`;
  }

  // Search user by username
  searchUser(username: string) {
    this.searchTerms.next(username.trim());
  }
}
