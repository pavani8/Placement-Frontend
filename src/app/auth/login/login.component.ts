import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StudentloginService } from '../../studentlogin.service';
import { studentLogin } from '../.././models/studentLogin';
import { StudentService } from '../../student.service';
import { Student } from '../../models/student';
import { facultyLogin } from '../.././models/facultyLogin';
import { FacultyloginService } from '../../facultylogin.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
  @Input() userId: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  @Input() password: string;
  error: string;
  constructor(public authService: AuthService, public router: Router) {
    this.authService.logout();
  }
  setMessage(){
  this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
 }
  login() {
    this.submitted = true;
        this.loading = true;
        console.log("comp");
        this.authService.login(this.userId, this.password)
            .pipe(first())
            .subscribe(
                data => {
                  console.log(data);
                  if(data.userType=='Student')
                     this.router.navigate(['/User']);
                  else
                    this.router.navigate(['/Admin']);

                },
                error => {
                  this.error = error
                    this.loading = false;
                });
    }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}