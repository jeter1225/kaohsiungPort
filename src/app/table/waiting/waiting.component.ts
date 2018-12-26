import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StatusService } from '../../service-summary/status.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BreakDialogComponent } from '../../dialog-summary/break-dialog/break-dialog.component';
import { UnscheduleDialogComponent } from '../../dialog-summary/unschedule-dialog/unschedule-dialog.component';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {
  dataSource: MatTableDataSource<any>;

  displayedColumns = ['pilot_id_name', 'time', 'break', 'unschedule'];

  constructor( 
    private statusService: StatusService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    setTimeout((_ => this.dataSource.data = this.statusService.getWaitingData()), 2000);
  }

  openBreakDialog(id, name) {
    const dialogRef = this.dialog.open(BreakDialogComponent, {
      width: '1300px',
      height: '700px',
      data: {
        pilot_id: id,
        pilot_name: name 
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The break dialog is closed!');
    })
  }

  openUnscheduleDialog(id, name) {
    const unschedule_dialogRef = this.dialog.open(UnscheduleDialogComponent, {
      width: '1300px',
      height: '700px',
      data: {
        pilot_id: id,
        pilot_name: name 
      }
    })

    unschedule_dialogRef.afterClosed().subscribe(result => {
      console.log('The unschedule dialog is closed!');
    })
  }

}
