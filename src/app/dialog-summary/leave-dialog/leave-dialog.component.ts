import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotStatusService } from '../../service-summary/pilot-status-service.service';

export interface fillinOrNot {
  viewValue: string;
  truth: boolean;
}

@Component({
  selector: 'app-leave-dialog',
  templateUrl: './leave-dialog.component.html',
  styleUrls: ['./leave-dialog.component.css']
})
export class LeaveDialogComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  private pilot_id_name: string;
  private date = new Date();

  ifFillin: boolean;
  fillinOptions: fillinOrNot[] = [
    {viewValue: '有', truth: true}, 
    {viewValue: '無', truth: false}
  ];

  constructor(
    private dialogRef: MatDialogRef<LeaveDialogComponent>,
    private pilotStatusService: PilotStatusService
  ) { }

  displayedColumns = ['pilot_id_name', 'date', 'fillin'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.pilot_id_name = this.pilotStatusService.getPilotStatusData();
    this.dataSource.data = [
      { pilot_id_name: this.pilot_id_name, date: this.date }
    ];
    
  }

}
