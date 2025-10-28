import { Routes } from '@angular/router';
import { authGuard } from './core/services/guard/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { productsRoutes } from './features/products/products.routing';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { UserRoutes } from './features/user/user.routing';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, //
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
      },
      { path: 'products', children: productsRoutes, canActivate: [authGuard] },
      {
        path: 'users',
        canActivate: [authGuard],
        children: UserRoutes,
      },
    ],
  },
];
