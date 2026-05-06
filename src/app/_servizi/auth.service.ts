import { inject, Injectable } from '@angular/core';
import { ILoginRequest, ILoginResponse } from '../_interfacce/iauth';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private http = inject(HttpClient);
    private apiUrl = `${environment.apiBaseUrl}/auth/`;

    login(credentials: ILoginRequest): Observable<ILoginResponse> {
        return this.http.post<ILoginResponse>(`${this.apiUrl}login`, credentials)
            .pipe(
                tap((response: ILoginResponse) => {
                    if (response.accessToken) {
                        localStorage.setItem('jwt_token', response.accessToken);
                    }
                })
            )
    }

    logout() {
        localStorage.removeItem('jwt_token');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('jwt_token');
    }

    getToken(): string | null {
        return localStorage.getItem('jwt_token');
    }
}
