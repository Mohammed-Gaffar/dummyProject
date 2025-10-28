import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { authGuard } from '../../core/services/guard/auth.guard';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { EditComponent } from './components/edit/edit.component';

export const UserRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [authGuard],
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [authGuard],
  },
];
