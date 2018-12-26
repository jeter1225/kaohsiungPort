import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LeaveService } from '../../service-summary/leave.service';

@Component({
  selector: 'app-leave-dialog',
  templateUrl: './leave-dialog.component.html',
  styleUrls: ['./leave-dialog.component.css']
})
export class LeaveDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LeaveDialogComponent>,
    private dialog: MatDialog,
    private leaveService: LeaveService
  ) { }

  ngOnInit() {
  }

}
