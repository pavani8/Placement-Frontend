import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { userRegistration } from './models/userregistration';
import { observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserregistrationService {
  userRegistrationSvcUrl: string;
  constructor(private http: HttpClient) {
    this.userRegistrationSvcUrl = "http://localhost:8000/userregistration";
   }
   private handleError(error: HttpErrorResponse){
    return throwError(
      error.error.message);

  };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addUserCredentials(userCredentials: userRegistration){
    return this.http.post(this.userRegistrationSvcUrl, JSON.stringify(userCredentials), this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateStudentLogin(id: string,userCredentials: userRegistration){
    return this.http.patch(this.userRegistrationSvcUrl + "/" + id, JSON.stringify(userCredentials),
    this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
