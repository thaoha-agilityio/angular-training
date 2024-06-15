import { USER_STATUS } from '../constants';

export interface User {
  id: number;
  fullName: string;
  email?: string;
  avatar?: string;
  createDate: string;
  details?: string;
  status: USER_STATUS;
}
