import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Routes, Server} from '../utils/ServerRoutes';
import {Observable} from 'rxjs/Observable';
import {Room} from '../model/Room';
import "rxjs/add/operator/map";

@Injectable()
export class RoomService {

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
      return this.http.get<Room[]>(Server.routeTo(Routes.ROOM))
        .map(res => res);
  }

}
