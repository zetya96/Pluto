import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';

import {MaterialItemsModule} from "./MaterialItemsModule";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { AuthService } from "./services/auth.service";
import { AuthInterceptor } from './http-interceptor'
import { MenuComponent } from './components/menu/menu.component';
import { HTTPService} from './services/HTTPService.service';

import { appRoutes } from "./routes";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseComponent } from './pages/course/course.component';
import { UserComponent } from './pages/user/user.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { CreateCourseComponent } from './pages/create-course/create-course.component';
import { MeComponent } from './pages/me/me.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    MainPageComponent,
    CoursesComponent,
    CourseComponent,
    UserComponent,
    UserlistComponent,
    CreateCourseComponent,
    MeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialItemsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    ,AuthService, HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
