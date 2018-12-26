import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BreakService } from '../../service-summary/break.service';
import { Directive, HostListener } from '@angular/core';
import { MatDialogContainer } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { takeUntil } from 'rxjs/operators/takeUntil';
import 'rxjs/add/observable/fromEvent';
import { take } from 'rxjs/operators/take';

@Component({
  selector: 'app-break-dialog',
  templateUrl: './break-dialog.component.html',
  styleUrls: ['./break-dialog.component.css']
})
export class BreakDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<BreakDialogComponent>,
    private dialog: MatDialog,
    private breakService: BreakService
  ) { }

  ngOnInit() {
  }

}

