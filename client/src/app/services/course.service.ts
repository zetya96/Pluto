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
      return this.http.get<Course[]>(Server.routeTo(Routes.COURSE))
      .toPromise()
      .then(course => { return course });
  }

  create(course: Course): Observable<Course>{
      return this.http.post<Course>(Server.routeTo(Routes.COURSE), course)
        .map(res => res);
  }
}
