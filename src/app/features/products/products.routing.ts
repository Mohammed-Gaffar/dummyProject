import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { DetailsComponent } from './details/details.component';
import { authGuard } from '../../core/services/guard/auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { routes } from '../../app.routes';
import { ProductOfCategoreyComponent } from './productOfCategorey/productOfCategorey.component';

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
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'categories/:categoryName',
    component: ProductOfCategoreyComponent,
    canActivate: [authGuard],
  },
];
