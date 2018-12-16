import { StatusService } from '../service-summary/status.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pilot-status',
  templateUrl: './pilot-status.component.html',
  styleUrls: ['./pilot-status.component.css']
})
export class PilotStatusComponent implements OnInit {
  private tok: any;

  constructor( private statusService: StatusService ) { }

  ngOnInit() {
    this.tok = this.statusService.returnToken();
    // this.statusService.getData()
    // .subscribe(checkToken => {
    //   console.log("subscribe to send token success!")
    //   this.statusService.getStatusInfo();
    // });
  }

}
