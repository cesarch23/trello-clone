import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { environment} from '@environments/environment'
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email:string, password:string)
  {
    return this.http.post(`${API_URL}/auth/login`,{ email, password })
  }

}
