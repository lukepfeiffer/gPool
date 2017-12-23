import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent }    from './sign-in/sign-in.component';
import { SignUpComponent }    from './sign-up/sign-up.component';
import { DashboardComponent }    from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign_in', pathMatch: 'full' },
  { path: 'sign_in', component: SignInComponent},
  { path: 'sign_up', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
