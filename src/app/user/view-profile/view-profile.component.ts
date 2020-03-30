import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Student } from '../.././models/student';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
currentUser: string;
error: string;
student: Student=new Student("","","",0,"",new Date(),"","","","",0,0,0,0,"","");

  constructor(private studSvc: StudentService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
   }

  ngOnInit() {
    console.log("hello");
    this.studSvc.getStudentById(this.currentUser).
    subscribe((data: Student) => {
      this.student = data;
      console.log(data);
      console.log(this.student);
      this.error = "";
      }, error => this.error = error);
  } 
}
