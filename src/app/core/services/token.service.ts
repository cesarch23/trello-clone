import { Injectable } from '@angular/core';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  saveToken(token:string){
    setCookie('token',token)
  }
  getToken(){
    return getCookie('token')
  }
  removeToken(){
    removeCookie('token')
  }
}
