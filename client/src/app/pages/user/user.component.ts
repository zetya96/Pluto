import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  constructor(private route: ActivatedRoute,private courseService: CourseService) { }

  ngOnInit() {
  }

}
