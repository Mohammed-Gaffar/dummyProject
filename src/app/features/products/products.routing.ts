import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { DetailsComponent } from './details/details.component';
import { authGuard } from '../../core/services/guard/auth.guard';
import { LoginComponent } from '../login/login.component';

export const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivate: [authGuard],
    pathMatch: 'full', // ✅ Only match exact /products
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [authGuard],
  },
];
