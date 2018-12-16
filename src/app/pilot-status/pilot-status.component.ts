import { StatusService } from '../service-summary/status.service';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export interface dataType {
  'my_pilot_id': string,
  'my_name': string,
  'my_status': string,
  'ship': string,
  'night_shift': string,
  'leave_or_not': string
}


@Component({
  selector: 'app-pilot-status',
  templateUrl: './pilot-status.component.html',
  styleUrls: ['./pilot-status.component.css']
})
export class PilotStatusComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  breakData: MatTableDataSource<any>;
  furloughData: MatTableDataSource<any>;
  leaveData: MatTableDataSource<any>;
  unscheduleData: MatTableDataSource<any>;
  waitingData: MatTableDataSource<any>;
  workingData: MatTableDataSource<any>;

  constructor( private statusService: StatusService ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.statusService.getData()
    .subscribe(statusData => {
      this.dataSource = statusData,
      console.log(this.dataSource),
      console.log("Get status data success!")
      //this.divideData();
    });
  }

  // divideData() {
  //   let len = this.dataSource.data.length;
  //   while(len > 0)
  //   {
  //     if()
  //   }
  // }

}
