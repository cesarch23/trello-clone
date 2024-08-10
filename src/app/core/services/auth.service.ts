import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { environment} from '@environments/environment'
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { LoginResponse } from '../models/auth.model';
import  { tap} from 'rxjs'
import { TokenService } from './token.service';
import { Profile } from '../models/profile.model';
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private profile = new BehaviorSubject<Profile | null>(null);
  public profile$= this.profile.asObservable();
  
  constructor(
    private http: HttpClient,
    private tokenService:TokenService
  ) { 
    
  }

  login(email:string, password:string)
  {
    return this.http.post<LoginResponse>(`${API_URL}/auth/login`,{ email, password })
      .pipe(
        tap({
          next:(resp)=>{ this.tokenService.saveToken(resp.access_token)}
        })
      )
  }
  register(name:string, email:string, password:string)
  {
    return this.http.post(`${API_URL}/auth/register`,{email,password,name});
  }
  registerAndLogin(name:string, email:string, password:string){
    return this.register(name,email,password)
    .pipe(
      switchMap(() => this.login(email,password) )
    );
  }
  isAvailableEmail(email:string){
    return this.http.post<{isAvailable: boolean}>(`${API_URL}/auth/is-available`,{email});
  }
  
  logout(){
    this.tokenService.removeToken();
  }
  getProfile(){
    const token = this.tokenService.getToken();
    return this.http.get<Profile>(`${API_URL}/auth/profile`,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }).pipe(
      tap({
        next:(resp)=>{
          this.profile.next(resp)
        }
      })
    )
  }

}
 

