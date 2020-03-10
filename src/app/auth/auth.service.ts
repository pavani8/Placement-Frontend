import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(userid: string): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
      this.isLoggedIn = true;
    localStorage.setItem('currentUser', JSON.stringify(userid));
    return userid;
  })
  );
  }

  logout(): void {
    delay(100);
    localStorage.removeItem('currentUser')
    this.isLoggedIn = false;
  }
}
