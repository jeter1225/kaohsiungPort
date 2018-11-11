import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotOrderService } from '../../service-summary/pilot-order-service.service';

@Component({
  selector: 'app-pilot-order-continue-record-table',
  templateUrl: './pilot-order-continue-record-table.component.html',
  styleUrls: ['./pilot-order-continue-record-table.component.css']
})
export class PilotOrderContinueShipTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  totalCount: number;

  constructor( private pilotOrderService: PilotOrderService ) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['happen_time', 'pilot_id_name', 'exchange_ship', 'continueRest_id_name'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.pilotOrderService.getPilotOrderContinueShipRecord()
    .subscribe(pilot_order_continue_ship_record => {
      this.dataSource.data = pilot_order_continue_ship_record;
      this.totalCount = pilot_order_continue_ship_record.items.length;
      this.dataSource.paginator = this.paginator;
    }
    );
  }
}
