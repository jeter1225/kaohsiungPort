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

  constructor( private http: HttpClient ) { }
  
  getStatusInfo(): void {
  	this.http.get<any>(this.statusUrl)
  	.pipe(
  		tap(status_info_list => this.dataSource = status_info_list),
      catchError(this.handleError('getStatusInfo--Error', [])),
      tap(_ => console.log("work!"))
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
