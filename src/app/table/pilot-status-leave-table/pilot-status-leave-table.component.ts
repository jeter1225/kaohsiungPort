import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotStatusService } from '../../service-summary/pilot-status-service.service';

export interface fillinOrNot {
  viewValue: string;
  truth: boolean;
}

@Component({
  selector: 'app-pilot-status-leave-table',
  templateUrl: './pilot-status-leave-table.component.html',
  styleUrls: ['./pilot-status-leave-table.component.css']
})
export class PilotStatusLeaveTableComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  private pilot_id_name: string;
  private date = new Date();

  ifFillin: boolean;
  fillinOptions: fillinOrNot[] = [
    {viewValue: '有', truth: true}, 
    {viewValue: '無', truth: false}
  ];

  constructor( private pilotStatusService: PilotStatusService ) {
    
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pilot_id_name', 'date', 'fillin'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.pilot_id_name = this.pilotStatusService.getPilotStatusData();
    this.dataSource.data = [
      { pilot_id_name: this.pilot_id_name, date: this.date }
    ];
    
  }
}
