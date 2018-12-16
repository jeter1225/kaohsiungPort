import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  constructor(
		private http: HttpClient,
		private global: Global
	) { }

	private informationTableUrl = this.global.infoUrl;
	
	getInformation(): Observable<any> {
		let postToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.global.token}`
      })
		};
		
  	return this.http.get<any>(this.informationTableUrl, postToken)
  	.pipe(
  		tap(information_table_list => console.log('fetch info data success!')),
  		catchError(this.handleError('getInformationTable--Error', []))
  	);
	}

  private handleError<T> (operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
  		console.log(operation);
  		return of(result as T);
  	}
  }

}

