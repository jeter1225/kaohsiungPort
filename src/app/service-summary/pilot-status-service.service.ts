import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PilotStatusService {
	private pilotStatusListUrl = 'http://fleet-geode-218517.appspot.com/api/status/';

  constructor(
		private http: HttpClient
	) { }

	private pilotIdSource: string;
	private pilotNameSource: string;

  getPilotStatusList(): Observable<any> {
  	return this.http.get<any>(this.pilotStatusListUrl)
  	.pipe(
  		tap(pilot_status_list => this.log('fetched status list')),
  		catchError(this.handleError('getPilotStatusList--Error', []))
  	);
	}

	givePilotStatusData(id: string, name: string): void {
		this.pilotIdSource = id;
		this.pilotNameSource = name;
	}

	getPilotStatusData() {
		return (this.pilotIdSource + " " + this.pilotNameSource)
	}

	getPilotStatusBreakList(): Observable<any> {
  	return this.http.get<any>(this.pilotStatusListUrl)
  	.pipe(
  		tap(pilot_status_break_list => this.log('fetched status break list')),
  		catchError(this.handleError('getPilotStatusBreakList--Error', []))
  	);
	}

	getPilotStatusLeaveList(): Observable<any> {
  	return this.http.get<any>(this.pilotStatusListUrl)
  	.pipe(
  		tap(pilot_status_leave_list => this.log('fetched status leave list')),
  		catchError(this.handleError('getPilotStatusLeaveList--Error', []))
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

