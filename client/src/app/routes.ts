import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import {CourseComponent} from "./pages/course/course.component";
import {UserComponent} from "./pages/user/user.component";
import { UserlistComponent } from './pages/userlist/userlist.component';
import { CreateCourseComponent } from './pages/create-course/create-course.component';
import { MeComponent } from './pages/me/me.component';
export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: MainPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'course/:id', component: CourseComponent},
      {path: 'user/:id', component: UserComponent},
      {path: 'users', component: UserlistComponent},
      {path: 'createcourse',component: CreateCourseComponent},
      {path:'me',component: MeComponent}
    ]
  }];
