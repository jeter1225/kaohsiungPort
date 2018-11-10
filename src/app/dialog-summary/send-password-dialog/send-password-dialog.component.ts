import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-send-password-dialog',
  templateUrl: './send-password-dialog.component.html',
  styleUrls: ['./send-password-dialog.component.css']
})
export class SendPasswordDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<SendPasswordDialogComponent>,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

}
