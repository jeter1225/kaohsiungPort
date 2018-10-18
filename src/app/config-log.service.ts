import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigLogService {

  private pilotStatusUrl = 'api/pilot_status_list';

  constructor(
  	private http: HttpClient,
  ) { }

  getHeroes(): Observable<Hero[]> {
  	return this.http.get<Hero[]>(this.pilotStatusUrl)
  	.pipe(
  		tap(pilot_status_list => this.log('fetched hero')),
  		catchError(this.handleError('getHeroes', []))
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

