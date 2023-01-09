import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private Url: string = 'https://localhost:7285/api/User/authenticate';
  constructor(private http: HttpClient) {}
  private user$=new BehaviorSubject<string>('');

  login(loginObj: any) {
    return this.http.post<any>(`${this.Url}`, loginObj);
  }

  getuserdetails(){
    return this.user$.asObservable();
  }
}
