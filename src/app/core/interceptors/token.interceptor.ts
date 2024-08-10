import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpContext
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
const IS_PUBLIC_ENDPOINT= new HttpContextToken<boolean>(()=>true)
export function setIsPublicEndpoint(){
  return new HttpContext().set(IS_PUBLIC_ENDPOINT,false)
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService:TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.context.get(IS_PUBLIC_ENDPOINT)){
      return next.handle(request);
    }
    return this.addToken(request,next);
  }
  

  addToken(request: HttpRequest<unknown>, next: HttpHandler){
    const token = this.tokenService.getToken();
    
      if(token){
        const authRequest= request.clone({
          setHeaders:{
            Authorization:`Bearer ${token}`
          }
        });
        return next.handle(authRequest);
      }
      // REdirigir al login y cancelar request
      // return
      
    return next.handle(request);
  }
}
