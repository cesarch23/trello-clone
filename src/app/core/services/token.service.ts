import { Injectable } from '@angular/core';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
import { jwtDecode, JwtPayload } from 'jwt-decode'
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
  isValidToken():boolean{
    const token = this.getToken();
    if(!token) return false;
    const decodedToken = jwtDecode<JwtPayload>(token);
    console.log("decoded: ",decodedToken);
    if( decodedToken && decodedToken.exp){
      const today = new  Date();
      const tokenDate=  new Date(0);
      tokenDate.setUTCSeconds(decodedToken.exp)
      return today.getTime() < tokenDate.getTime();
    }
    return false;
  }
}
