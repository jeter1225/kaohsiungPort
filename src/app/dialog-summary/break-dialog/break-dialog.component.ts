import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-break-dialog',
  templateUrl: './break-dialog.component.html',
  styleUrls: ['./break-dialog.component.css']
})
export class BreakDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<BreakDialogComponent>
  ) { }

  ngOnInit() {
  }

}
