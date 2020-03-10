import { Component, OnInit } from '@angular/core';
import { StudentloginService } from '../../studentlogin.service';
import { studentLogin } from '../../models/studentLogin';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  login: studentLogin;
  logins: studentLogin[];
  error: string;
  constructor(private studLoginSvc: StudentloginService) { 
    this.login = new studentLogin("","");
    this.logins = [];
  }

  ngOnInit() {
  }
  getStudentLoginById(){
    let id: string = this.login.studentId;
    this.studLoginSvc.getStudentLoginById(id).
    subscribe(
      (data: any) => {
        console.log(data);
        this.login = data;
      }, //success path
      error => this.error = error //error path
    );
  }
  addStudentLogin(){
    this.studLoginSvc.addStudentLogin(this.login).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("New student login added");
      }, // success path
      error => this.error = error //error path
    );
  }
  updateStudentLogin(){
    let id: string = this.login.studentId;
    this.studLoginSvc.updateStudentLogin(id, this.login).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("Student login details are updated");
      }, // success path
      error => this.error = error // error path
    );
  }


}
