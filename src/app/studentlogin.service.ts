import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { studentLogin } from './models/studentlogin';
import { observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentloginService {
studentLoginSvcUrl: string;
  constructor(private http: HttpClient) {
    this.studentLoginSvcUrl = "http://localhost:8000/studentlogin";
   }
   private handleError(error: HttpErrorResponse){
    return throwError(
      error.error.message);

  };
  getStudentLoginById(id: string){
    return this.http.get(this.studentLoginSvcUrl + "/" +  id).pipe(
      catchError(this.handleError)
    );
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addStudentLogin(studentLogin: studentLogin){
    return this.http.post(this.studentLoginSvcUrl, JSON.stringify(studentLogin), this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateStudentLogin(id: string,studentLogin: studentLogin){
    return this.http.patch(this.studentLoginSvcUrl + "/" + id, JSON.stringify(studentLogin),
    this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
