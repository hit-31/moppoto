// Application imports
import { AuthGuard } from '../core/guards/auth-guard';

// Component
// import { HomePageComponent } from './home-page/home-page.component';

export const PostLoginRouting = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomePageComponent, canActivate: [AuthGuard]}
];