import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { facultyLogin } from './models/facultylogin';
import { observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FacultyloginService {
facultyLoginSvcUrl: string;
  constructor(private http: HttpClient) {
    this.facultyLoginSvcUrl = "http://localhost:8000/facultylogin";
   }
   private handleError(error: HttpErrorResponse){
    return throwError(
      error.error.message);

  };
  getFacultyLoginById(id: string){
    return this.http.get(this.facultyLoginSvcUrl + "/" +  id).pipe(
      catchError(this.handleError)
    );
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addFacultyLogin(facultyLogin: facultyLogin){
    return this.http.post(this.facultyLoginSvcUrl, JSON.stringify(facultyLogin), this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateFacultyLogin(id: string,facultyLogin: facultyLogin){
    return this.http.patch(this.facultyLoginSvcUrl + "/" + id, JSON.stringify(facultyLogin),
    this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}