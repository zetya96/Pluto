import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  courseForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    date: new FormControl('')

  });

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
