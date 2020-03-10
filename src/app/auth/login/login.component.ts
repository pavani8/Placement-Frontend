import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StudentloginService } from '../../studentlogin.service';
import { studentLogin } from '../.././models/studentLogin';
import { StudentService } from '../../student.service';
import { Student } from '../../models/student';
import { facultyLogin } from '../.././models/facultyLogin';
import { FacultyloginService } from '../../facultylogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
  @Input() userid: string;
  student: any;
  studentLogin: any;
  facultyLogin: any;
  @Input() password: string;
  error: string;
  constructor(public authService: AuthService, public router: Router, public studentSvc: StudentService, public studLoginSvc: StudentloginService, public facultySvc: FacultyloginService) {
    this.authService.logout();
  }
  setMessage(){
  this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
 }
  login(userid: string) {
    this.authService.login(this.userid).subscribe(() => {
      this.studLoginSvc.getStudentLoginById(this.userid).
        subscribe(
          (data: studentLogin) => {
            this.studentLogin = data;
            console.log("userid: ", this.userid);
            if (this.studentLogin.studentId == this.userid ) {
              if (this.studentLogin.studentPassword == this.password) {
                let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/user';
                this.router.navigateByUrl(redirect);
                //this.router.navigate(['user']);
              }
              else {
                alert("Invalid Credentials");
              }
            }
            else if (this.facultyLogin.facultyId == this.userid) {
              if (this.facultyLogin.facultypassword == this.password) {
                let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/admin';
                this.router.navigateByUrl(redirect);
               // this.router.navigate(["admin"]);
              }
              else {
                alert("Invalid Credentials");
              }
            }

            else {
              console.log("Wrong User Details");
            }
          },
          error => this.error = error

        )


    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}