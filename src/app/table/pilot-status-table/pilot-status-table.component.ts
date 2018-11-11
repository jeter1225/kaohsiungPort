import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotStatusService } from '../../service-summary/pilot-status-service.service';

@Component({
  selector: 'app-pilot-status-table',
  templateUrl: './pilot-status-table.component.html',
  styleUrls: ['./pilot-status-table.component.css']
})
export class PilotStatusTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  totalCount: number;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pilot_id', 'name', 'ship', 'status', 'night_shift', 'break', 'leave'];
  constructor( private pilotStatusService: PilotStatusService ) {
    
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.pilotStatusService.getPilotStatusList()
    .subscribe(pilot_status_list => {
      this.dataSource.data = pilot_status_list;
      this.totalCount = pilot_status_list.items.length;
      this.dataSource.paginator = this.paginator;
    }
    );
  }
}
