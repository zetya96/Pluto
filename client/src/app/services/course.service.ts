import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Routes, Server} from '../utils/ServerRoutes';
import {Observable} from 'rxjs/Observable';
import {Course} from '../model/Course';
import "rxjs/add/operator/map";

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
  create(course: Course): Observable<Course>{
      return this.http.post<Course>(Server.routeTo(Routes.COURSES), course)
        .map(res => res);
  }

  Join(index: number):Observable<string> {
    console.log("Joining course " + index);
    return this.http.post<string>(Server.routeTo(Routes.COURSES+"/"+index), index)
    .map(res => res);
  }
}
