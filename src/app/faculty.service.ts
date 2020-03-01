import { Injectable } from '@angular/core';
import { Faculty } from './models/faculty';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/Operators';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  facultySvcUrl: string;
  constructor(private http: HttpClient) { 
    this.facultySvcUrl = "http://localhost:8000/faculty";
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
 
  getAllFaculties(){
    return this.http.get(this.facultySvcUrl + "/all" ).pipe(
      catchError(this.handleError)
    );
  }

  getFacultyById(id: number){
    return this.http.get(this.facultySvcUrl + "/" +  id).pipe(
      catchError(this.handleError)
    );
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addFaculty(faculty:Faculty) {
    return this.http.post(this.facultySvcUrl, JSON.stringify(faculty), this.httpOptions).
      pipe(catchError(this.handleError));
  }

  updateFaculty(id: number,faculty: Faculty){
    console.log("ser");
    return this.http.patch(this.facultySvcUrl + "/" + id, JSON.stringify(faculty),
    this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteFaculty(id: number) {
    return this.http.delete(this.facultySvcUrl + "/" + id).
      pipe(catchError(this.handleError));

  } 
 
}
