import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  currentUser:string;
  error:string;
  student: Student;
  Gender: string;
  constructor(private studentSvc: StudentService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.studentSvc.getStudentById(this.currentUser).
    subscribe((data: Student) => {
      this.student = data;
      this.error = "";},
    error => this.error = error);
  }
}
