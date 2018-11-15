import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotStatusService } from '../../service-summary/pilot-status-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-flower-leave-inspect',
  templateUrl: './flower-leave-inspect.component.html',
  styleUrls: ['./flower-leave-inspect.component.css']
})
export class FlowerLeaveInspectComponent implements OnInit {

  dataSource: MatTableDataSource<any>;

  constructor(
    private dialogRef: MatDialogRef<FlowerLeaveInspectComponent>,
    private pilotStatusService: PilotStatusService
  ) { }

  displayedColumns = ['flower', 'leave', 'pilot_id_name'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    // this.pilotStatusService.getPilotStatusBreakList()
    // .subscribe(pilot_status_break_list => {
    //   this.dataSource.data = pilot_status_break_list;
    // }
    // );
    this.dataSource.data = [
      { pilot_id_name: 'A' }
    ];
    
  }

  cancelPilotBreak() {
    confirm('Sure to cancel the break ?');
  }

}
