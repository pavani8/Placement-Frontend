import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Student } from './models/student';
import { observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentSvcUrl: string;
  constructor(private http: HttpClient){
    this.studentSvcUrl = "http://localhost:8000/student";
  }
  private handleError(error: HttpErrorResponse){
    // if(error.error instanceof ErrorEvent){
    //   // A client-side or network error occurred. Handle it accordingly.
    //   console.error('An error occurred:', error.error.message);
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong,
    //   console.error(
    //     `Backend returned code ${error.status}, ` +
    //     `body was: ${error.error}`);

    // }
    // // return an observable with a user-facing error message
    return throwError(
      error.error.message);

  };
  getAllStudents(){
    return this.http.get(this.studentSvcUrl + "/all" ).pipe(
      catchError(this.handleError)
    );
  }
  getStudentById(id: number){
    return this.http.get(this.studentSvcUrl + "/" +  id).pipe(
      catchError(this.handleError)
    );
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addStudent(student: Student){
    return this.http.post(this.studentSvcUrl, JSON.stringify(student), this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateStudent(id: number,student: Student){
    console.log("ser");
    return this.http.patch(this.studentSvcUrl + "/" + id, JSON.stringify(student),
    this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteStudent(id: number){
    return this.http.delete(this.studentSvcUrl + "/" + id).pipe(
      catchError(this.handleError)
    );
  }
}
