// Application imports
import { AuthGuard } from '../core/guards/auth-guard';

// Component
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const PreLoginRouting = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard]},
  { path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard]}
];