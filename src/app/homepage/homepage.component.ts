import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LogoutComponent } from '../dialog-summary/logout/logout.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor( 
    private router: Router, 
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  repeatLogout: boolean = false;

  ngOnInit() {
  }

  navLinks = [{label: '最新船舶資訊', path: 'information'}, {label: '引水人當班狀態', path: 'pilot-status'}]

  openLogoutDialog() {
    this.repeatLogout = !this.repeatLogout;
    if(this.repeatLogout) {
      const dialogRef = this.dialog.open(LogoutComponent, {
        width: '250px',
        height: '150px',
        hasBackdrop: false
      })
      dialogRef.updatePosition({top: '5.5%', right: '1%'});
      dialogRef.afterClosed().subscribe(result => {
        console.log('The logout dialog is closed!');
      })
    }
    else{
      this.dialog.closeAll();
    }
  }

}
