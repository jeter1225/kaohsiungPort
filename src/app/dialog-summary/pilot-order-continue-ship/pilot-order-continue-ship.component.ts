import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotOrderService } from '../../service-summary/pilot-order-service.service';

@Component({
  selector: 'app-pilot-order-continue-ship',
  templateUrl: './pilot-order-continue-ship.component.html',
  styleUrls: ['./pilot-order-continue-ship.component.css']
})
export class PilotOrderContinueShipComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  totalCount: number;

  constructor(
    private dialogRef: MatDialogRef<PilotOrderContinueShipComponent>,
    private pilotOrderService: PilotOrderService
  ) { }

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
