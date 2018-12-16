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

  getData(): Observable<any> {
    let postToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.global.token}`
      })
    };

  	return this.http.get<any>(this.statusUrl, postToken)
  	.pipe(
  		tap(status_info_list => this.dataSource = status_info_list),
      catchError(this.handleError('Get status data fail!', []))
  	);
  }

  private handleError<T> (operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
  		console.log(operation);
  		return of(result as T);
  	}
  }
  
}
