import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Routes, Server} from '../utils/ServerRoutes';
import {Observable} from 'rxjs/Observable';
import {Course} from '../model/Course';
import "rxjs/add/operator/map";

@Injectable()
export class CourseService {

  constructor(private http: Http) { }

  getCourses(): Observable<Course[]> {
      return this.http.get(Server.routeTo(Routes.COURSE))
        .map(res => res.json());
  }

  create(course: Course): Observable<Course>{
      return this.http.post(Server.routeTo(Routes.COURSE), course)
        .map(res => res.json());
  }

  delete(id: number){
      return this.http.delete(Server.routeTo(Routes.COURSE) + '/' + id)
        .map(res => res.json());
  }

  read(id: number) {
    return this.http.get(Server.routeTo(Routes.ROOM) + '/' + id)
      .map(res => res.json())
  }

  check(id: number) {
    return this.http.get(Server.routeTo(Routes.ROOM) + '/check/' + id)
      .map(res => res.json())
  }

  getReservedRooms(): Observable<number[]> {
    return this.http.get(Server.routeTo(Routes.ROOM))
      .map(res => res.json())
  }

}
