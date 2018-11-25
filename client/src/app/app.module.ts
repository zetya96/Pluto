import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialItemsModule} from "./MaterialItemsModule";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { AuthService } from "./services/auth.service";
import { MenuComponent } from './components/menu/menu.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { CourseService} from './services/course.service';
import { ErrorComponent } from './pages/error/error.component'
import { appRoutes } from "./routes";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    RoomsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialItemsModule
  ],
  providers: [AuthService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
