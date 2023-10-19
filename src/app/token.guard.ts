import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const tokenGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const toaster = inject(ToastrService);
  const cookieService = inject(CookieService);

  // get token from cookie
  const token = cookieService.get('token');

  // if token is not present, redirect to home
  if (!token) {
    router.navigate(['/']);
    toaster.error('Token not set!', 'Error!', {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
    });
    return false;
  }

  return true;
};

