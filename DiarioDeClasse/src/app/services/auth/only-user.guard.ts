import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const onlyUserGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = await authService.getRole();
  if (role === 'user') {
    return true; // Allow regular users
  }

  router.navigate(['home/admin']); // Redirect non-users
  return false;
};
