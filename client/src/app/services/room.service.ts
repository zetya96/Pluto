import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Routes, Server} from '../utils/ServerRoutes';
import {Observable} from 'rxjs/Observable';
import {Room} from '../model/Room';
import "rxjs/add/operator/map";

@Injectable()
export class RoomService {

  constructor(private http: Http) { }

  getRooms(): Observable<Room[]> {
      return this.http.get(Server.routeTo(Routes.ROOM))
        .map(res => res.json());
  }

}
