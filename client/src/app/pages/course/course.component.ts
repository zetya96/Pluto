import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/Course';
import { CourseService } from '../../services/course.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course;
  alreadyJoined: boolean = false;
  constructor(private auth: AuthService, private route: ActivatedRoute,private courseService: CourseService) { }

  ngOnInit() {
    

    this.getCourse();
    
  }

  private async getCourse() {
    this.course = await this.courseService.getCourse(parseInt(this.route.snapshot.params.id as string));
    console.log("current course name: " + this.course.name);
    console.log(this.auth.user);
    this.auth.user.courses_S.forEach(course => {
      if(course.name == this.course.name) {
        this.alreadyJoined = true;
      }
    });

    this.auth.user.courses_T.forEach(course => {

      if(course.name == this.course.name) {
        this.alreadyJoined = true;
      }
    });
}

  Join() {
    this.courseService.JoinCourse(this.course.id)
    .subscribe(
      res =>{
       
        this.auth.user.courses_S.push(this.course);
        this.alreadyJoined = true;
        alert("A jelentkezés megtörtént!");

    },
      err => alert("Már jelentkeztél!"))
  }
}
