import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Department } from './models/department';
import { observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departmentSvcUrl: string;
  constructor(private http: HttpClient){
    this.departmentSvcUrl = "http://localhost:8000/department";
  }
  private handleError(error: HttpErrorResponse){
    return throwError(
      error.error.message);

  };
  getAllDepartments(){
    return this.http.get(this.departmentSvcUrl + "/all").pipe(
      catchError(this.handleError)
    );
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addDepartment(dept: Department){
    return this.http.post(this.departmentSvcUrl, JSON.stringify(dept), this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
