import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import {CourseComponent} from "./pages/course/course.component";
import {UserComponent} from "./pages/user/user.component";
export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: MainPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'course/:id', component: CourseComponent},
      {path: 'user/:id', component: UserComponent}
    ]
  }];
