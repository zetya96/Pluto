export class Routes {
  static LOGIN: String = 'users/login';
  static USERS: String = 'users';
  static COURSES: String = 'courses';
  static ROOM: String = 'rooms';
}

export class Server {
  private static address: String = 'localhost';
  private static port: String = '4200';
  private static prefix: String = 'api';

  static routeTo(route: String) {
    return `http://${Server.address}:${Server.port}/${Server.prefix}/${route}`
  }
}


