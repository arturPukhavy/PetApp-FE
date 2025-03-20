import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '/api/login';
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('jwtToken'));
  isLoggedIn = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    console.log('Sending POST request to:', this.apiUrl);
    console.log('Payload:', { email, password });
    return this.http.post<{ token: string }>(this.apiUrl, { email, password }).pipe(
      tap(response => {
        localStorage.setItem('jwtToken', response.token);
        this.loggedIn.next(true);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.loggedIn.next(false);
  }

  isAuthenticated(): boolean {
    return this.loggedIn.value;
  }
}