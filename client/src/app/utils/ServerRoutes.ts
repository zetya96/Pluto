export class Routes {
  static LOGIN: String = 'user/login';
  static REGISTER: String = 'users';
  static COURSE: String = 'courses';
  static ROOM: String = 'rooms';
  static LOGOUT: String = 'user/logout';
}

export class Server {
  private static address: String = 'localhost';
  private static port: String = '4200';
  private static prefix: String = 'api';

  static routeTo(route: String) {
    return `http://${Server.address}:${Server.port}/${Server.prefix}/${route}`
  }
}


