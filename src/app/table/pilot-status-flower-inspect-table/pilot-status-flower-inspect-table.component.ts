import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotStatusService } from '../../service-summary/pilot-status-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pilot-status-flower-inspect-table',
  templateUrl: './pilot-status-flower-inspect-table.component.html',
  styleUrls: ['./pilot-status-flower-inspect-table.component.css']
})
export class PilotStatusFlowerInspectTableComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  
  constructor( private pilotStatusService: PilotStatusService ) {
    
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
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
