import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { catchError, map, tap } from 'rxjs/operators';
import { PilotStatusTableItem } from './pilot-status-table/pilot-status-table-datasource';

@Injectable({
  providedIn: 'root'
})
export class ConfigLogService {

	private pilotStatusListUrl = 'api/pilot_status_list';

  constructor(
  	private http: HttpClient,
  ) { }

  getPilotStatusList(): Observable<PilotStatusTableItem[]> {
  	return this.http.get<PilotStatusTableItem[]>(this.pilotStatusListUrl)
  	.pipe(
  		tap(pilot_status_list => this.log('fetched status list')),
  		catchError(this.handleError('getPilotStatusList', []))
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

