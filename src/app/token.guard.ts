import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CanActivateFn, Router } from '@angular/router';

export const tokenGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  // get token from cookie
  const token = cookieService.get('token');

  // if token is not present, redirect to home
  if (!token) {
    router.navigate(['/']);
    return false;
  }

  return true;
};

