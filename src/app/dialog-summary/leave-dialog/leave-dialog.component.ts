import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-leave-dialog',
  templateUrl: './leave-dialog.component.html',
  styleUrls: ['./leave-dialog.component.css']
})
export class LeaveDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LeaveDialogComponent>
  ) { }

  ngOnInit() {
  }

}
