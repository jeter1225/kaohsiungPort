import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ConfigLogService } from '../config-log.service';

@Component({
  selector: 'app-pilot-order-table',
  templateUrl: './pilot-order-table.component.html',
  styleUrls: ['./pilot-order-table.component.css']
})
export class PilotOrderTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  totalCount: number;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pilot_order', 'pilot_id', 'name', 'return_time'];
  constructor( private configLogService: ConfigLogService ) {
    
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.configLogService.getPilotStatusList()
    .subscribe(pilot_order_list => {
      this.dataSource.data = pilot_order_list;
      this.totalCount = pilot_order_list.items.length;
      this.dataSource.paginator = this.paginator;
    }
    );
  }
}
