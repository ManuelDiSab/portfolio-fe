import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // If i'm logged i can enter to the private pages
  } else {
    // If i'm not logged i can't enter to the private pages and i'll be redirected to the login page
    router.navigate(['/']);
    return false;
  }
};
