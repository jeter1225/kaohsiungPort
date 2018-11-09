import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigLogService {

	private pilotStatusListUrl = 'http://fleet-geode-218517.appspot.com/api/pilot/';
	private informationTableUrl = 'http://fleet-geode-218517.appspot.com/api/event/';
	private pilotOrderListUrl = 'http://fleet-geode-218517.appspot.com/api/order/';

  constructor(
  	private http: HttpClient,
	) { }
	
	getInformation(): Observable<any> {
  	return this.http.get<any>(this.informationTableUrl)
  	.pipe(
  		tap(information_table_list => this.log('fetched info list')),
  		catchError(this.handleError('getInformationTable--Error', []))
  	);
	}

  getPilotStatusList(): Observable<any> {
  	return this.http.get<any>(this.pilotStatusListUrl)
  	.pipe(
  		tap(pilot_status_list => this.log('fetched status list')),
  		catchError(this.handleError('getPilotStatusList--Error', []))
  	);
	}

  getPilotOrderList(): Observable<any> {
		return this.http.get<any>(this.pilotOrderListUrl)
  	.pipe(
  		tap(pilot_order_list => this.log('fetched order list')),
  		catchError(this.handleError('getPilotOrderList--Error', []))
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

