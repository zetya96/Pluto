import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Course} from '../../model/Course';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor(private courseService: CourseService, private auth : AuthService,private router: Router) { }
  courses: Course[];
  ngOnInit() {  
    if(!this.auth.isLoggedIn) return;
    
    this.getCourses();
   
  }


  private async getCourses() {
  
    this.courses = await this.courseService.getCourses();
    

  
  }

}
