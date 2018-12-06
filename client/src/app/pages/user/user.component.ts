import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  constructor(private auth: AuthService, private route: ActivatedRoute,private courseService: CourseService) { }

  ngOnInit() {
    

    this.getUser();
    
  }

  private async getUser() {
    this.user = await this.courseService.getUser(parseInt(this.route.snapshot.params.id as string));
    console.log("current user name: " + this.user.username);

}

}
