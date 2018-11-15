import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotStatusService } from '../../service-summary/pilot-status-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface remarksReasonType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pilot-break-inspect',
  templateUrl: './pilot-break-inspect.component.html',
  styleUrls: ['./pilot-break-inspect.component.css']
})
export class PilotBreakInspectComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  remarksControl = new FormControl();
  date = new Date();

  remarksReason: remarksReasonType[] = [
    {value: 'unfinishedWork', viewValue: '工作未完成'},
    {value: 'trafficJam', viewValue: '交通堵塞'},
    {value: 'pilotDemand', viewValue: '領港要求'},
    {value: 'other', viewValue: '其它'}
  ];

  constructor(
    private dialogRef: MatDialogRef<PilotBreakInspectComponent>,
    private pilotStatusService: PilotStatusService
  ) { }

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
