import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  dataSource: MatTableDataSource<any>;

  constructor( 
    private http: HttpClient,
    private global: Global
  ) { }

  private statusUrl = this.global.statusUrl;
  private tok: any;
  
  sendToken(token: any) {
    this.tok = token;
  }

  returnToken() {
    return this.tok;
  }

  getData(): Observable<any> {
    let postHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.global.token}`
      })
    };

    return this.http.get<any>(this.statusUrl, postHeaders)
    .pipe(
      tap(checkToken => console.log("postToken--Success")),
      catchError(this.handleError('postToken--Error', []))
    );
  }

  getStatusInfo(): void {
    let postToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.global.token}`
      })
    };

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
  
}
