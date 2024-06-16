import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Types
import { User } from '@/app/core/types';

// Services
import { BaseService } from '@/app/core/services/base.service';

// Constants
import { API_PATH, SEARCH_PARAMS } from '@/app/core/constants';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService<User> {
  constructor(http: HttpClient) {
    super(http);
    this.path = API_PATH.USERS;
  }

  /**
   * Search users by name
   * @param name
   */
  searchUserByName(name: string): Observable<User[]> {
    const params = `${this.path}?${SEARCH_PARAMS.USERNAME}=${name}`;

    return this.getWithParams(params);
  }

  editUser(id: number, item: User): Observable<User> {
    const url = `${this.path}/${id}`;

    return this.put(url, item);
  }
}
