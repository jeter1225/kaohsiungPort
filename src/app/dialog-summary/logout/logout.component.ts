import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LogoutComponent>,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  clickLogout(): void {
    this.router.navigate(['sign-in']);
  }

}
