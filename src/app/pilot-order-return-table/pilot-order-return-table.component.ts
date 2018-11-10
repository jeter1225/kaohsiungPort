import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotOrderService } from '../service-summary/pilot-order-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pilot-order-return-table',
  templateUrl: './pilot-order-return-table.component.html',
  styleUrls: ['./pilot-order-return-table.component.css']
})
export class PilotOrderReturnTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  totalCount: number;

  constructor( private pilotOrderService: PilotOrderService ) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pilot_id', 'name', 'return_type'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.pilotOrderService.getPilotOrderReturnList()
    .subscribe(pilot_order_return_list => {
      this.dataSource.data = pilot_order_return_list;
      this.totalCount = pilot_order_return_list.items.length;
      this.dataSource.paginator = this.paginator;
    }
    );
  }
}
