import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ConfigLogService } from '../config-log.service';

@Component({
  selector: 'app-pilot-status-table',
  templateUrl: './pilot-status-table.component.html',
  styleUrls: ['./pilot-status-table.component.css']
})
export class PilotStatusTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pilot_id', 'name', 'ship', 'status', 'night_shift', 'break', 'leave'];
  constructor( private configLogService: ConfigLogService ) {
    
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.configLogService.getPilotStatusList()
    .subscribe(pilot_status_list => this.dataSource.data = pilot_status_list);
  }
}
