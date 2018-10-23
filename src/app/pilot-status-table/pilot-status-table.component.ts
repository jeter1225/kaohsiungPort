import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotStatusTableDataSource, PilotStatusTableItem } from './pilot-status-table-datasource';
import { ConfigLogService } from '../config-log.service';

@Component({
  selector: 'app-pilot-status-table',
  templateUrl: './pilot-status-table.component.html',
  styleUrls: ['./pilot-status-table.component.css']
})
export class PilotStatusTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private dataInit: PilotStatusTableItem[];
  dataSource: MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pilot_id', 'name', 'ship_id', 'status', 'night_shift', 'break', 'leave'];
  constructor( private configLogService: ConfigLogService ) {
    
  }

  ngOnInit() {
    this.configLogService.getPilotStatusList()
    .subscribe(pilot_status_list => this.dataSource.data = pilot_status_list);
    this.dataSource = new MatTableDataSource(this.dataInit);
    
    this.dataSource.paginator = this.paginator;
  }
}
