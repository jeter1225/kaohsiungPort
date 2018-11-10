import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotOrderService } from '../service-summary/pilot-order-service.service';

@Component({
  selector: 'app-pilot-order-change-order-table',
  templateUrl: './pilot-order-change-order-table.component.html',
  styleUrls: ['./pilot-order-change-order-table.component.css']
})
export class PilotOrderChangeOrderTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  totalCount: number;

  constructor( private pilotOrderService: PilotOrderService ) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pilot_order', 'pilot_id', 'name', 'return_time', 'change_reason'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.pilotOrderService.getPilotOrderChangeOrderList()
    .subscribe(pilot_order_change_order_list => {
      this.dataSource.data = pilot_order_change_order_list;
      this.totalCount = pilot_order_change_order_list.items.length;
      this.dataSource.paginator = this.paginator;
    }
    );
  }
}
