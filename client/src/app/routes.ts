import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";


export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: MainPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  }];
