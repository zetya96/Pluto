import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { AuthService } from '../../services/auth.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  user: User;
  constructor(private auth: AuthService,private courseService: CourseService) { }

  ngOnInit() {
    if(!this.auth.isLoggedIn) return;

    this.user = this.auth.user;
    
  }

  Discard(id:number) {
    this.courseService.DiscardCourse(id)
    .subscribe(
      res =>{
       
        this.auth.user.courses_S = res;
    
        alert("A leadás megtörtént!");

    },
      err => alert("HIBA"))
  }

}
