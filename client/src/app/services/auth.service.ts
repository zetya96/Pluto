import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable()
export class AuthService {

  user : User;
  isLoggedIn: boolean = false;
  basicheader: String = "";

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  login(user: User) {
    this.basicheader = btoa(user.username+":"+user.password);
    console.log(this.basicheader);
    return this.http.post<User>(Server.routeTo(Routes.LOGIN), user)
      .map(res => {
        this.isLoggedIn = true;
        this.user = res;
        return this.user;
      })
  }

  register(user: User) {
    return this.http.post(Server.routeTo(Routes.REGISTER), user)
      .map(res => {
        
      })
  }
  logout() {
    this.user = null;
    this.isLoggedIn = false;
    this.basicheader = "";
  }


}
