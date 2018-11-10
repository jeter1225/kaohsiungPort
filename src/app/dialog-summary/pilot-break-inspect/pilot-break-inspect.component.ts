import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pilot-break-inspect',
  templateUrl: './pilot-break-inspect.component.html',
  styleUrls: ['./pilot-break-inspect.component.css']
})
export class PilotBreakInspectComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PilotBreakInspectComponent>
  ) { }

  ngOnInit() {
  }

}
