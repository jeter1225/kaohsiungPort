import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pilot-order-change-order',
  templateUrl: './pilot-order-change-order.component.html',
  styleUrls: ['./pilot-order-change-order.component.css']
})
export class PilotOrderChangeOrderComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PilotOrderChangeOrderComponent>
  ) { }

  ngOnInit() {
  }

}
