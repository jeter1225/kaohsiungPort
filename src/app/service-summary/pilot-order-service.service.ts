import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PilotOrderService {
	private pilotOrderListUrl = 'http://fleet-geode-218517.appspot.com/api/order/';

  constructor(
  	private http: HttpClient,
	) { }

  getPilotOrderList(): Observable<any> {
		return this.http.get<any>(this.pilotOrderListUrl)
  	.pipe(
  		tap(pilot_order_list => this.log('fetched order list')),
  		catchError(this.handleError('getPilotOrderList--Error', []))
  	);
	}
	
	getPilotOrderContinueShipRecord(): Observable<any> {
		return this.http.get<any>(this.pilotOrderListUrl)
		.pipe(
			tap(pilot_order_continue_ship_record => this.log('fetched continue ship list')),
			catchError(this.handleError('getPilotOrderContinueShipRecord--Error', []))
		)
	}

	getPilotOrderChangeOrderList(): Observable<any> {
		return this.http.get<any>(this.pilotOrderListUrl)
		.pipe(
			tap(pilot_order_change_order_list => this.log('fetched change order list')),
			catchError(this.handleError('getPilotOrderChangeOrderList--Error', []))
		)
	}

	getPilotOrderReturnList(): Observable<any> {
		return this.http.get<any>(this.pilotOrderListUrl)
		.pipe(
			tap(pilot_order_return_list => this.log('fetched return list')),
			catchError(this.handleError('getPilotOrderReturnList--Error', []))
		)
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

