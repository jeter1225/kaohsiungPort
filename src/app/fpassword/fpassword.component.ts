import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SendPasswordDialogComponent } from '../dialog-summary/send-password-dialog/send-password-dialog.component';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.css'],
})
export class FpasswordComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(SendPasswordDialogComponent, {
      width: '350px',
      height: '150px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog is closed!');
    })
  }

  ngOnInit() {
  }
  
  goBack() {
  	this.location.back();
  }
}
