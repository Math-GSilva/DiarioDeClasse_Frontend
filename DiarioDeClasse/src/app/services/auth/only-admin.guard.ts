import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const onlyAdminGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = await authService.getRole();
  if (role === 'admin') {
    return true; // Allow admins
  }

  router.navigate(['home/user']); // Redirect non-admins
  return false;
};
