import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SendPasswordDialogComponent } from '../dialog-summary/send-password-dialog/send-password-dialog.component';

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

  openDialog(): void {
    const dialogRef = this.dialog.open(SendPasswordDialogComponent, {
      width: '650px',
      height: '300px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog is closed!');
    })
  }

  ngOnInit() {
  }
  
}
