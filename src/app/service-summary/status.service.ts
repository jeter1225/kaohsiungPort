import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  dataSource: MatTableDataSource<any>;
  private statusUrl = 'http://fleet-geode-218517.appspot.com/api/status/';
  private tok: any;

  constructor( 
    private http: HttpClient
    ) { }
  
  sendToken(token: string) {
    this.tok = token;
  }

  returnToken() {
    return this.tok;
  }

  postToken(): Observable<any> {
    let postToken = {
      "token": this.tok
    }

    let postHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.statusUrl, JSON.stringify(postToken), postHeaders)
    .pipe(
      tap(checkToken => console.log("postToken--Success")),
      catchError(this.handleError('postToken--Error', []))
    );
  }

  getStatusInfo(): void {
  	this.http.get<any>(this.statusUrl)
  	.pipe(
  		tap(status_info_list => {
        this.dataSource = status_info_list
        console.log("work!");
      }),
      catchError(this.handleError('getStatusInfo--Error', []))
  	);
  }

  private handleError<T> (operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
  		console.log(operation);
  		return of(result as T);
  	}
  }

  log(message: string) {
  	console.log(message);
  }
}
