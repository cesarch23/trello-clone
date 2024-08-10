import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';
 

export const redirectGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if(tokenService.isValidToken())
  {
    router.navigate(['/admin/boards'])
    return false;
  }
  //router.navigate(['/auth/login'])
  return true;
};
