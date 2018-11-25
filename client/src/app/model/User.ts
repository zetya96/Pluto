
export class User {
  id: number;
  username: String;
  fullname: String;
  password: String;
  email: String;


  constructor(username?: String, password?: String, fullname?: String, email?: String) {
    this.username = username || '';
    this.password = password || '';
    this.email = email || '';
    this.fullname = fullname ||'';
  }
}
