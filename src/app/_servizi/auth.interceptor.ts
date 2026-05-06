import { HttpInterceptorFn, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  // IT:prendo il token solo se esiste. Non blocco se è null
  // EN: I take the token only if it exists. I don't block if it's null
  const token = authService.getToken()

  // IT: Se c'è il token, lo clone e lo attacco alle richieste protette
  // EN: If the token exists, I clone it and attach it to protected requests
  if (token) {
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next(tokenReq).pipe(
      // IT: Intercetto gli errori 401
      // EN: I intercept 401 errors
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          // IT: Butto fuori l'utente e pulisco
          // EN: I kick the user out and clean up
          authService.logout()
          router.navigate(['/login'])
        }
        return throwError(() => error)
      })
    )
  }

  return next(req)
}
