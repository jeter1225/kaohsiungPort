import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotStatusService } from '../../service-summary/pilot-status-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface remarksReasonType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pilot-status-break-table',
  templateUrl: './pilot-status-break-table.component.html',
  styleUrls: ['./pilot-status-break-table.component.css']
})
export class PilotStatusBreakTableComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  remarksControl = new FormControl();
  get_id_name: string;

  remarksReason: remarksReasonType[] = [
    {value: 'pilotDemand', viewValue: '領港要求'},
    {value: 'other', viewValue: '其它'}
  ];

  constructor( private pilotStatusService: PilotStatusService ) {
    
  }
  pilot_id_name: string;
  date = new Date();
  time = new Date();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pilot_id_name', 'date', 'time', 'remarks'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.pilot_id_name = this.pilotStatusService.getPilotStatusData();
    this.dataSource.data = [
      { pilot_id_name: this.pilot_id_name, date: this.date, time: this.time }
    ];

  }

  
  
}
