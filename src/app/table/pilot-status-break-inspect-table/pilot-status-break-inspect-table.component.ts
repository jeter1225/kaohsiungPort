import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotStatusService } from '../../service-summary/pilot-status-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface remarksReasonType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pilot-status-break-inspect-table',
  templateUrl: './pilot-status-break-inspect-table.component.html',
  styleUrls: ['./pilot-status-break-inspect-table.component.css']
})
export class PilotStatusBreakInspectTableComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  remarksControl = new FormControl();
  date = new Date();

  remarksReason: remarksReasonType[] = [
    {value: 'unfinishedWork', viewValue: '工作未完成'},
    {value: 'trafficJam', viewValue: '交通堵塞'},
    {value: 'pilotDemand', viewValue: '領港要求'},
    {value: 'other', viewValue: '其它'}
  ];

  constructor( private pilotStatusService: PilotStatusService ) {
    
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pilot_id_name', 'change_break_time', 'remarks', 'cancel'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    // this.pilotStatusService.getPilotStatusBreakList()
    // .subscribe(pilot_status_break_list => {
    //   this.dataSource.data = pilot_status_break_list;
    // }
    // );
    this.dataSource.data = [
      { pilot_id_name: 'A', change_break_time: this.date }
    ];
    
  }

  cancelPilotBreak() {
    confirm('Sure to cancel the break ?');
  }
}
