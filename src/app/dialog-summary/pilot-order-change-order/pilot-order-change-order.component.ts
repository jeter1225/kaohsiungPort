import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotOrderService } from '../../service-summary/pilot-order-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface changeReasonType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pilot-order-change-order',
  templateUrl: './pilot-order-change-order.component.html',
  styleUrls: ['./pilot-order-change-order.component.css']
})
export class PilotOrderChangeOrderComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  totalCount: number;
  changeControl = new FormControl();

  changeReason: changeReasonType[] = [
    {value: 'exchange', viewValue: '交換'},
    {value: 'correct', viewValue: '修正'},
    {value: 'other', viewValue: '其它'}
  ];

  constructor(
    private dialogRef: MatDialogRef<PilotOrderChangeOrderComponent>,
    private pilotOrderService: PilotOrderService
  ) { }

  displayedColumns = ['pilot_order', 'pilot_id', 'name', 'return_time', 'change_reason'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.pilotOrderService.getPilotOrderChangeOrderList()
    .subscribe(pilot_order_change_order_list => {
      this.dataSource.data = pilot_order_change_order_list;
      this.totalCount = pilot_order_change_order_list.items.length;
    }
    );
  }

}
