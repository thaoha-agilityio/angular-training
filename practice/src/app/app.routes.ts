import { Routes } from '@angular/router';

// Main layout
import { MainLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-list',
  },
  {
    path: 'user-list',
    component: MainLayoutComponent,
  },
];
