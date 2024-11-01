import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
  const  authService  =  inject(AuthService);
  const  router  =  inject(Router);

  if (!authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['home']);
  return false;
};
