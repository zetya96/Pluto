import { Course } from "./Course";

export class User {
  id: number;
  username: String;
  fullname: String;
  password: String;
  email: String;
  courses_T: Course[];
  courses_S: Course[];
  role: String;
  constructor(username?: String, password?: String, fullname?: String, email?: String,courses_T?: Course[], role?: String) {
    this.username = username || '';
    this.password = password || '';
    this.email = email || '';
    this.fullname = fullname ||'';
    this.courses_T = courses_T;
    this.courses_S = [];
    this.role = role || 'ROLE_GUEST';
  }

}
