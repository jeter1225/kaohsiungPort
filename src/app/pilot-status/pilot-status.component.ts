import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PilotBreakInspectComponent } from '../dialog-summary/pilot-break-inspect/pilot-break-inspect.component';
import { FlowerLeaveInspectComponent } from '../dialog-summary/flower-leave-inspect/flower-leave-inspect.component';

@Component({
  selector: 'app-pilot-status',
  templateUrl: './pilot-status.component.html',
  styleUrls: ['./pilot-status.component.css']
})
export class PilotStatusComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openBreakInspect() {
    const fstDialogRef = this.dialog.open(PilotBreakInspectComponent, {
      width: '1000px',
      height: '500px',
    })
    fstDialogRef.afterClosed().subscribe(result => {
      console.log('The logout dialog is closed!');
    });
  }

  openFlowerLeaveInspect() {
    const sndDialogRef = this.dialog.open(FlowerLeaveInspectComponent, {
      width: '1000px',
      height: '500px',
    })
    sndDialogRef.afterClosed().subscribe(result => {
      console.log('The logout dialog is closed!');
    });
  }

}
