import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Routes, Server} from '../utils/ServerRoutes';
import {Observable} from 'rxjs/Observable';
import {Course} from '../model/Course';
import "rxjs/add/operator/map";
import { User } from '../model/User';
import { Room } from '../model/Room';

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Promise<Course[]> {
      return this.http.get<Course[]>(Server.routeTo(Routes.COURSES))
      .toPromise()
      .then(course => { return course });
  }
  getCourse(id: number): Promise<Course> {
    return this.http.get<Course>(Server.routeTo(Routes.COURSES) + "/"+id )
    .toPromise()
    .then(course => { return course });
  }
 
  CreateCourse(name:string,roomId:number,date:string): Observable<Course>{
    var fd = new FormData();
    fd.append('name', name);
    fd.append('roomId',roomId.toString());
    fd.append('date',date);
    return this.http.post<Course>(Server.routeTo(Routes.COURSES),fd)
      .map(res => res);
}

JoinCourse(index: number):Observable<string> {
  console.log("Joining course " + index);
  return this.http.post<string>(Server.routeTo(Routes.COURSES+"/"+index), index)
  .map(res => res);
}
DiscardCourse(index:number) {
  return this.http.put<Course[]>(Server.routeTo(Routes.COURSES+"/"+index), index)
  .map(res => res);
}

getUser(id: number): Promise<User> {
  return this.http.get<User>(Server.routeTo(Routes.USERS) + "/"+id )
  .toPromise()
  .then(user => { return user });
}
getUsers(): Promise<User[]> {
    return this.http.get<User[]>(Server.routeTo(Routes.USERS))
    .toPromise()
    .then(user => { return user });
}


getRooms(): Promise<Room[]> {
  return this.http.get<Room[]>(Server.routeTo(Routes.ROOM))
    .toPromise()
    .then(room => { return room });
}
 
}
