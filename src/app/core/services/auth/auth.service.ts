import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  loginrequest,
  loginresponse,
} from '../../../features/login/model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'accessToken';
  private readonly refreshToken = 'refreshToken';
  private readonly username = 'username';
  private readonly email = 'email';

  private readonly apiurl = 'https://dummyjson.com/auth';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

  //login
  // login(credentials: { email: string; password: string }): Observable<any> {
  login(credentials: loginrequest): Observable<loginresponse> {
    return this.http
      .post<loginresponse>(`${this.apiurl}/login`, credentials)
      .pipe(
        tap((loginresponse) => {
          localStorage.setItem(this.tokenKey, loginresponse.accessToken);
          localStorage.setItem(this.refreshToken, loginresponse.refreshToken);
          localStorage.setItem(this.username, loginresponse.username);
          localStorage.setItem(this.email, loginresponse.email);
          this.isLoggedInSubject.next(true);
          this.getCurrentUser();
        })
      );
  }

  getCurrentUser() {
    return this.http
      .get('https://dummyjson.com/auth/users/me')
      .subscribe((response) => {
        console.log(response);
      });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    // return this.isLoggedInSubject.asObservable();
    return !!this.getToken();
  }

  hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
