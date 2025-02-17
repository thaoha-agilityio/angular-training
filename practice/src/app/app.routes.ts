import { Routes } from '@angular/router';

// Main layout
import { MainLayoutComponent } from './layout';

// Components
import { UserComponent } from './user/components';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-list',
  },
  {
    path: 'user-list',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: UserComponent,
      },
    ],
  },
];
