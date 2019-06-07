// Core imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Third party imports
import { RouterModule } from '@angular/router';
// Routes
import { PostLoginRouting as routes } from './post-login-routing';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class PostLoginModule { }
