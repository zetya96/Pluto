import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";
import {Routes, Server} from "../utils/ServerRoutes";
import { Course } from '../model/Course';
import { RouterLink, Router } from '@angular/router';

@Injectable()
export class AuthService {

  user : User;
  isLoggedIn: boolean = false;
  //basicheader: String = "WmV0eWE6U2FqdA==";
  basicheader: String = "";
  constructor(private http: HttpClient,private router: Router) {
    this.user = new User();
  }

  login(user: User) {
    this.basicheader = btoa(user.username+":"+user.password);
    console.log(this.basicheader);
    return this.http.post<User>(Server.routeTo(Routes.LOGIN), user)
      .map(res => {
        this.isLoggedIn = true;
        this.user = res;
        console.log("LOGGED IN: " +this.user);
        return this.user;
      })
  }
  getJoinedCourses() {
    return this.http.get<Course[]>(Server.routeTo(Routes.COURSES+"/mycourses"))
      .map(res => {
        this.user.courses_S = res;
        
        return this.user;
      })
  }

  register(user: User) {
    return this.http.post(Server.routeTo(Routes.USERS), user)
      .map(res => {
        
      })
  }
  logout() {
    this.user = new User();
    this.isLoggedIn = false;
    this.basicheader = "";
    this.router.navigate(['/login']);
    console.log("LOGGED OUT");
    //window.location.href = '';
  }


}
