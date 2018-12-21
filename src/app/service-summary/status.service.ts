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
  breakData: MatTableDataSource<any>;
  furloughData: MatTableDataSource<any>;
  leaveData: MatTableDataSource<any>;
  unscheduleData: MatTableDataSource<any>;
  waitingData: MatTableDataSource<any>;
  workingData: MatTableDataSource<any>;
  assignedData: MatTableDataSource<any>;

  constructor( 
    private http: HttpClient,
    private global: Global
  ) { 
    this.dataSource = new MatTableDataSource();
    this.furloughData = new MatTableDataSource();
    this.breakData = new MatTableDataSource();
    this.leaveData = new MatTableDataSource();
    this.unscheduleData = new MatTableDataSource();
    this.waitingData = new MatTableDataSource();
    this.workingData = new MatTableDataSource();
    this.assignedData = new MatTableDataSource();
  }

  private statusUrl = this.global.statusUrl;
  private tok: any;

  getData(): Observable<any> {
    let postToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.global.getToken()}`
      })
    };

  	return this.http.get<any>(this.statusUrl, postToken)
  	.pipe(
  		tap(status_info_list => {
        this.dataSource.data = status_info_list
        this.divideData();
      }),
      catchError(this.handleError('Get status data fail!', []))
  	);
  }

  private handleError<T> (operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
  		console.log(operation);
  		return of(result as T);
  	}
  }

  divideData() {
    let len = this.dataSource.data.length;
    len -= 1;
    while(len >= 0)
    {
      switch(this.dataSource.data[len].my_status)
      {
        case "工作中":
          this.workingData.data.push(this.dataSource.data[len]);
          break;
        case "待命中":
          this.waitingData.data.push(this.dataSource.data[len]);
          break;
        case "休假中":
          this.furloughData.data.push(this.dataSource.data[len]);
          break;
        case "請假中":
          this.leaveData.data.push(this.dataSource.data[len]);
          break;
        case "掛牌中":
          this.breakData.data.push(this.dataSource.data[len]);
          break;
        case "暫時不排班":
          this.unscheduleData.data.push(this.dataSource.data[len]);
          break;
        case "已簽船":
          this.assignedData.data.push(this.dataSource.data[len]);
          break;
      }
      len -= 1;
    }
  }

  getWorkingData() {
    return this.workingData.data;
  }
  getWaitingData() {
    return this.waitingData.data;
  }
  getFurloughData() {
    return this.furloughData.data;
  }
  getLeaveData() {
    return this.leaveData.data;
  }
  getBreakData() {
    return this.breakData.data;
  }
  getUnscheduleData() {
    return this.unscheduleData.data;
  }
  getAssignedData() {
    return this.assignedData.data;
  }
  
}
