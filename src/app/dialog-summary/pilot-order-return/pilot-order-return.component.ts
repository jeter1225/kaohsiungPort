import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pilot-order-return',
  templateUrl: './pilot-order-return.component.html',
  styleUrls: ['./pilot-order-return.component.css']
})
export class PilotOrderReturnComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PilotOrderReturnComponent>
  ) { }

  ngOnInit() {
  }

}
