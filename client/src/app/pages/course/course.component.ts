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
  constructor(private auth: AuthService, private route: ActivatedRoute,private courseService: CourseService) { }

  ngOnInit() {
    

    this.getCourse();
  }

  private async getCourse() {
    this.course = await this.courseService.getCourse(parseInt(this.route.snapshot.params.id as string));
    
}

  Join() {
    this.courseService.Join(this.course.id)
    .subscribe(
      res =>{
        alert("A jelentkezés megtörtént!")

    },
      err => alert("Már jelentkeztél!"))
  }
}
