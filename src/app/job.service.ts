import { Injectable } from '@angular/core';
import { Job } from './models/job';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/Operators';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobSvcUrl: string;

  constructor(private http: HttpClient) {
    this.jobSvcUrl = "http://localhost:8000/job";
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
 
  getAllJobs(){
    return this.http.get(this.jobSvcUrl + "/all" ).pipe(
      catchError(this.handleError)
    );
  }

  getJobById(id: number){
    return this.http.get(this.jobSvcUrl + "/" +  id).pipe(
      catchError(this.handleError)
    );
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addJob(job:Job) {
    return this.http.post(this.jobSvcUrl, JSON.stringify(job), this.httpOptions).
      pipe(catchError(this.handleError));
  }

  updateJob(id: number,job: Job){
    return this.http.patch(this.jobSvcUrl + "/" + id, JSON.stringify(job),
    this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteJob(id: number) {
    return this.http.delete(this.jobSvcUrl + "/" + id).
      pipe(catchError(this.handleError));

  } 
 
}
