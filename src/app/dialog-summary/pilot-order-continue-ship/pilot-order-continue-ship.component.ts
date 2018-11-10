import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pilot-order-continue-ship',
  templateUrl: './pilot-order-continue-ship.component.html',
  styleUrls: ['./pilot-order-continue-ship.component.css']
})
export class PilotOrderContinueShipComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PilotOrderContinueShipComponent>
  ) { }

  ngOnInit() {
  }

}
