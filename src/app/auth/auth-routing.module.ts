import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth.module';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
  component:LoginComponent
  },
  {
    path: 'signup',
  component:SignupComponent
  },
  {
    path: 'forgotPassword',
  component:ForgotpasswordComponent
  },
  {
    path: '',
    component:LoginComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
