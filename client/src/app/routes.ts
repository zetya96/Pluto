import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {RoomsComponent} from './components/rooms/rooms.component';
import {ErrorComponent} from "./pages/error/error.component";


export const appRoutes: Routes = [
  {
    path: '',
    children: [
      //{path: '', redirectTo: 'rooms', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  }];
