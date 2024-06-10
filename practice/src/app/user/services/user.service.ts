import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Types
import { User } from '@/app/core/types';

// Services
import { BaseService } from '@/app/core/services/base.service';

// Constants
import { ROUTES } from '@/app/core/constants';

@Injectable()
export class UserService extends BaseService<User> {
  /**
   * Get user list
   */
  getUserList(): Observable<User[]> {
    return this.getList(`${ROUTES.USERS}`);
  }
}
