import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PilotOrderChangeOrderComponent } from '../dialog-summary/pilot-order-change-order/pilot-order-change-order.component';
import { PilotOrderReturnComponent } from '../dialog-summary/pilot-order-return/pilot-order-return.component';
import { PilotOrderContinueShipComponent } from '../dialog-summary/pilot-order-continue-ship/pilot-order-continue-ship.component';

@Component({
  selector: 'app-pilot-order',
  templateUrl: './pilot-order.component.html',
  styleUrls: ['./pilot-order.component.css'],
})
export class PilotOrderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog
  ) { }

  openChangeOrder() {
    const fstDialogRef = this.dialog.open(PilotOrderChangeOrderComponent, {
      width: '1000px',
      height: '500px',
    })
    fstDialogRef.afterClosed().subscribe(result => {
      console.log('The logout dialog is closed!');
    });
  }

  openReturn() {
    const sndDialogRef = this.dialog.open(PilotOrderReturnComponent, {
      width: '1000px',
      height: '500px',
    })
    sndDialogRef.afterClosed().subscribe(result => {
      console.log('The logout dialog is closed!');
    });
  }

  openContinueShip() {
    const thrDialogRef = this.dialog.open(PilotOrderContinueShipComponent, {
      width: '1000px',
      height: '500px',
    })
    thrDialogRef.afterClosed().subscribe(result => {
      console.log('The logout dialog is closed!');
    });
  }

  ngOnInit() {
  }
  
}
