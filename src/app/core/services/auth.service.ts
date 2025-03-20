import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '/api/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    console.log('Sending POST request to:', this.apiUrl);
    console.log('Payload:', { email, password });
    return this.http
      .post<{ token: string }>(this.apiUrl, { email, password })
      .pipe(
        map((response) => {
          console.log('Response:', response);
          return response;
        }),
        catchError((error) => {
          console.error('Error details:', error);
          return this.handleError(error);
        })
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
}