import { Subject, debounceTime, switchMap } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
import { UserEditComponent } from '../user-edit/user-edit.component';

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
    UserEditComponent,
  ],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  isModalOpen = false;
  isOpenDetailModal = false;
  isShowEditForm = false;
  bgColor = '';
  firstLetter = '';
  columns: Cell[] = [
    {
      key: 'avatar',
      title: 'avatar',
      widthPercent: 14,
    },
    {
      key: 'fullName',
      title: 'Full Name',
      widthPercent: 31,
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
      widthPercent: 35,
    },
  ];

  users: User[] = [];
  user: User = {} as User;

  private searchTerms = new Subject<string>();

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.setUsers();

    this.userService.dataChanged$.subscribe((item: User) => {
      if (!item) return;

      // Update user in the list if exists, otherwise add it
      const index = this.users.findIndex(user => user.id === item.id);

      if (index > -1) {
        this.users[index] = item;
      } else {
        this.users = [...this.users, item];
      }

      this.user = { ...item };

      this.cdr.detectChanges();
    });

    this.searchTerms
      .pipe(
        debounceTime(800),
        switchMap((term: string) => this.userService.searchUserByName(term))
      )
      .subscribe((data: User[]) => {
        this.users = data;
        this.cdr.detectChanges();
      });
  }

  //  Call service to get product list from server then set response data to products if success
  setUsers(): void {
    this.userService.getList().subscribe((data: User[]) => {
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

  // Handle close detail modal component
  closeDetailModal(): void {
    this.isOpenDetailModal = false;
  }

  // Handle show user detail
  showUserDetail(id: number) {
    if (this.isShowEditForm) {
      this.isOpenDetailModal = false;
    } else {
      this.isOpenDetailModal = true;
    }

    this.userService.getItem(id.toString()).subscribe((data: User) => {
      this.user = data;
      this.cdr.detectChanges();
    });
  }

  // Show edit user form
  showEditForm() {
    this.closeDetailModal();
    this.isShowEditForm = true;
  }

  closeEditForm() {
    this.isShowEditForm = false;
    this.isOpenDetailModal = true;
  }
}
