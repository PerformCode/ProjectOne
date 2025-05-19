import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users';  // Spring Boot URL

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<string> {
    return this.http.post(this.apiUrl, user, { responseType: 'text' });
  }
}