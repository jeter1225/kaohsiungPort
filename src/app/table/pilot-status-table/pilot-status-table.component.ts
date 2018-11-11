import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PilotStatusService } from '../../service-summary/pilot-status-service.service';
import { LeaveDialogComponent } from '../../dialog-summary/leave-dialog/leave-dialog.component';
import { BreakDialogComponent } from '../../dialog-summary/break-dialog/break-dialog.component';

@Component({
  selector: 'app-pilot-status-table',
  templateUrl: './pilot-status-table.component.html',
  styleUrls: ['./pilot-status-table.component.css']
})
export class PilotStatusTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  totalCount: number;
  id: string;
  name: string;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pilot_id', 'name', 'ship', 'status', 'night_shift', 'break', 'leave'];
  constructor( 
    private pilotStatusService: PilotStatusService,
    private dialog: MatDialog
    ) {
    
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.pilotStatusService.getPilotStatusList()
    .subscribe(pilot_status_list => {
      this.dataSource.data = pilot_status_list;
      this.totalCount = pilot_status_list.items.length;
      this.dataSource.paginator = this.paginator;
    }
    );
  }

  givePilotStatusLeaveData(data) {
    this.id = data.pilot_id;
    this.name = data.name;
    this.pilotStatusService.givePilotStatusData(this.id, this.name);
    const leaveDialogRef = this.dialog.open(LeaveDialogComponent, {
      width: '1000px',
      height: '500px',
    })
    leaveDialogRef.afterClosed().subscribe(result => {
      console.log('The logout dialog is closed!');
    });
  }

  givePilotStatusBreakData(data) {
    this.id = data.pilot_id;
    this.name = data.name;
    this.pilotStatusService.givePilotStatusData(this.id, this.name);
    const breakDialogRef = this.dialog.open(BreakDialogComponent, {
      width: '1000px',
      height: '500px',
    })
    breakDialogRef.afterClosed().subscribe(result => {
      console.log('The logout dialog is closed!');
    });
  }

}
