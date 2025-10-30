import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private api_url = 'https://dummyjson.com/users';

  getUsers(): Observable<user[]> {
    return this.http
      .get<{ users: user[] }>(this.api_url)
      .pipe(map((res) => res.users));
  }

  getUserById(id: number): Observable<user> {
    return this.http.get<user>(`${this.api_url}/${id}`).pipe();
  }

  updateUser(id: number, userData: Partial<user>) {
    debugger;
    return this.http.put<user>(`${this.api_url}/${id}`, userData);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.api_url}/${id}`);
  }
}
