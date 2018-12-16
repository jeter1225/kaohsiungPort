import { StatusService } from '../service-summary/status.service';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-pilot-status',
  templateUrl: './pilot-status.component.html',
  styleUrls: ['./pilot-status.component.css']
})
export class PilotStatusComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;

  constructor( private statusService: StatusService ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.statusService.getData()
    .subscribe(checkToken => {
      this.dataSource = checkToken,
      console.log("Get status data success!")
    });
  }

}
