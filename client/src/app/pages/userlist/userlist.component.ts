import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { AuthService } from '../../services/auth.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users:User[];
  constructor(private auth: AuthService,private courseService: CourseService) { }

  ngOnInit() {  
    if(!this.auth.isLoggedIn) return;
    
    this.getUsers();
   
  }


  private async getUsers() {
  
    this.users = await this.courseService.getUsers();

  
  }


}
