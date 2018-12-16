import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  constructor( 
    private http: HttpClient, 
    private global: Global
  ) { }

  private accountInput: string;
  private authenUrl = this.global.tokenUrl;
  private userUrl = this.global.userUrl;
  private authenUrl2: string;

  login(account: string, password: string): Observable<any> {
    this.accountInput = account;
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
              tap(data => console.log("Get token Success!")),
              catchError(this.handleError('Connection Error when trying to authentication!', []))
           );
  }

  checkIdentity(): Observable<any> {
    this.authenUrl2 = this.userUrl.concat(this.accountInput);

    let postToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.global.token}`
      })
    };

    return this.http.get<any>(this.authenUrl2, postToken)
           .pipe(
              tap(data => console.log("Check identity success!")),
              catchError(this.handleError('Connection Error when trying to check identity!', []))
           );
  }

  private handleError<T> (operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
  		console.log(operation);
  		return of(result as T);
  	}
  }
}
