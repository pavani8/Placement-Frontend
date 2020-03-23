import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/Operators';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { userRegistration } from './models/userregistration';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerSvcUrl: string;

  constructor(private http: HttpClient) {
    this.registerSvcUrl = "http://localhost:8000/register";
   }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 
  
  private handleError(error: HttpErrorResponse){
  return throwError(
    error.error.message);
};
  register(user: userRegistration) {
    return this.http.post(this.registerSvcUrl, JSON.stringify(user), this.httpOptions).
      pipe(catchError(this.handleError));
}

 update(id: string,user: userRegistration) {
  return this.http.patch(this.registerSvcUrl + "/" + id, JSON.stringify(user),this.httpOptions).
   pipe(catchError(this.handleError));
}

}
