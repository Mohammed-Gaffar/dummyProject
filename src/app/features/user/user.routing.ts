import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { authGuard } from '../../core/services/guard/auth.guard';
import { UserProfileComponent } from './userProfile/userProfile.component';

export const UserRoutes: Routes = [
  { path: '', component: UserComponent, canActivate: [authGuard] },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [authGuard],
  },
];
