import { Injectable } from '@angular/core';
import { tap, delay } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  loginSvcUrl: string;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private http: HttpClient){
    this.loginSvcUrl = "http://localhost:8000/login";
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
  login(userId: string, password: string) {
    console.log("Ser");
      return this.http.post<any>(this.loginSvcUrl, { userId: userId, password: password })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
              }

              return user;
          }));
}

  logout(): void {
    delay(100);
    localStorage.removeItem('currentUser')
    this.isLoggedIn = false;
  }
}
