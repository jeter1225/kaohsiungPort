import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-flower-leave-inspect',
  templateUrl: './flower-leave-inspect.component.html',
  styleUrls: ['./flower-leave-inspect.component.css']
})
export class FlowerLeaveInspectComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<FlowerLeaveInspectComponent>
  ) { }

  ngOnInit() {
  }

}
