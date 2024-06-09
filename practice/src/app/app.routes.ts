import { Routes } from '@angular/router';

// Main layout
import { MainLayoutComponent } from './layout';

// Components
import { TableComponent } from './shared/components';

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
        component: TableComponent,
      },
    ],
  },
];
