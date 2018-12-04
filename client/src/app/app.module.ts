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
import { CourseService} from './services/course.service';
import { ErrorComponent } from './pages/error/error.component'
import { appRoutes } from "./routes";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseComponent } from './pages/course/course.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ErrorComponent,
    MainPageComponent,
    CoursesComponent,
    CourseComponent
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
    ,AuthService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
