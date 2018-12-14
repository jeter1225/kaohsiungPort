import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor( private http: HttpClient ) { }

  private authenUrl = "https://fleet-geode-218517.appspot.com/api-token-auth/";

  login(account: string, password: string): Observable<any> {
    let postUser = {
      "username": account,
      "password": password
    }

    let postHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.authenUrl, JSON.stringify(postUser), postHeaders)
           .pipe(
              tap(data => console.log(data)),
              catchError(this.handleError('Connection Error when trying to authentication!', []))
           );
  }

  private handleError<T> (operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
  		console.log(operation);
  		return of(result as T);
  	}
  }
}
