// Core imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Third party imports
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Routes
import { PreLoginRouting as routes } from './pre-login-routing';
// Components
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from '../common/footer/footer.component';
import { HeaderComponent } from '../common/header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    HomePageComponent,
    SignInComponent,
    FooterComponent,
  HeaderComponent,
  SignUpComponent
]
})
export class PreLoginModule { }
