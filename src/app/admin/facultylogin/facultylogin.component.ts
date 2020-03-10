import { Component, OnInit } from '@angular/core';
import { FacultyloginService } from '../../facultylogin.service';
import { facultyLogin } from '../../models/facultyLogin';

@Component({
  selector: 'app-facultylogin',
  templateUrl: './facultylogin.component.html',
  styleUrls: ['./facultylogin.component.css']
})
export class FacultyloginComponent implements OnInit {
  login: facultyLogin;
  logins: facultyLogin[];
  error: string;
  constructor(private fLoginSvc: FacultyloginService) { 
    this.login = new facultyLogin("","");
    this.logins = [];
  }

  ngOnInit() {
  }
  getFacultyLoginById(){
    let id: string = this.login.facultyId;
    this.fLoginSvc.getFacultyLoginById(id).
    subscribe(
      (data: any) => {
        console.log(data);
        this.login = data;
      }, //success path
      error => this.error = error //error path
    );
  }
  addFacultyLogin(){
    this.fLoginSvc.addFacultyLogin(this.login).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("New faculty login added");
      }, // success path
      error => this.error = error //error path
    );
  }
  updateFacultyLogin(){
    let id: string = this.login.facultyId;
    this.fLoginSvc.updateFacultyLogin(id, this.login).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("Faculty login details are updated");
      }, // success path
      error => this.error = error // error path
    );
  }


}
