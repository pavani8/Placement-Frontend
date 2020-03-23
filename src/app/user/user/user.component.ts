import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Student } from '../.././models/student';
import { error } from 'protractor';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
currentUser: string;
error: string;
student: Student;
studName: string;
  constructor(private studSvc: StudentService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    console.log("hi");
    this.studSvc.getStudentById(this.currentUser).subscribe((data: Student) =>{
      this.student = data;
      this.studName = this.student.studentName;
    },error=> this.error=error);
    }

}
