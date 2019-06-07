import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './pre-login/pre-login.module#PreLoginModule'
  },
  // {
  //   path: 'post-login',
  //   loadChildren: './post-login/post-login.module#postLoginModule'
  // }    
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
