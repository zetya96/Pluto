import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { Room } from '../../model/Room';
import { HTTPService } from '../../services/HTTPService.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateCourseComponent implements OnInit {
  courseForm: FormGroup = new FormGroup({
    cname: new FormControl('',[Validators.required]),

    cdesc: new FormControl('', [Validators.required]),
    date: new FormControl('',[Validators.required]),

    room: new FormControl('',[Validators.required]),

  });
  rooms: Room[];
  constructor(private auth: AuthService,private courseService: HTTPService, private router: Router) { }

  ngOnInit() {
    this.getRooms();
  }

  private async getRooms() {
    console.log("Getting rooms");
    this.rooms = await this.courseService.getRooms();
  }

  submit() {
    console.log("submitting course..");

    this.courseService.CreateCourse(this.name.value,this.desc.value,this.room.value,this.date.value)
    .subscribe(
      res => { 
        alert("Kurzus létrehozva!");
        this.router.navigate(['../course/'+res.id]);
        this.auth.user.courses_T.push(res);
    },
      err => alert("Hiba!"));

  }

  get name(): AbstractControl {
    return this.courseForm.get('cname');
  }
  get desc() : AbstractControl {
    return this.courseForm.get('cdesc');
  }
  get date(): AbstractControl {
    return this.courseForm.get('date');
  }

  get room(): AbstractControl {
    return this.courseForm.get('room');
  }
}
