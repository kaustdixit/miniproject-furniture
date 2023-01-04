import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private Url: string = 'https://localhost:7285/api/User/authenticate';
  constructor(private http: HttpClient) {}

  login(loginObj: any) {
    return this.http.post<any>(`${this.Url}`, loginObj);
  }
}
