import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PilotStatusTableDataSource } from './pilot-status-table-datasource';

@Component({
  selector: 'app-pilot-status-table',
  templateUrl: './pilot-status-table.component.html',
  styleUrls: ['./pilot-status-table.component.css']
})
export class PilotStatusTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PilotStatusTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pilot_id', 'name', 'ship_id', 'status', 'night_shift', 'leave', 'break'];

  ngOnInit() {
    this.dataSource = new PilotStatusTableDataSource(this.paginator, this.sort);
  }
}
