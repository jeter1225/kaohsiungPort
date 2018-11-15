import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotOrderService } from '../../service-summary/pilot-order-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface returnType {
  value: string;
  viewValue: string;
}

export interface returnTypeGroup {
  disabled?: boolean;
  type_name: string;
  types: returnType[];
}

@Component({
  selector: 'app-pilot-order-return-table',
  templateUrl: './pilot-order-return-table.component.html',
  styleUrls: ['./pilot-order-return-table.component.css']
})
export class PilotOrderReturnTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  totalCount: number;
  returnControl = new FormControl();
  selectedOPtion: string;

  returnTypeGroups: returnTypeGroup[] = [
    {
      type_name: '無線電',
      types: [
        {value: 'radio', viewValue: '無線電'}
      ]
    },
    {
      type_name: '電話',
      types: [
        {value: 'noPower', viewValue: '對講機沒電'},
        {value: 'pilotDemand', viewValue: '領港要求'},
        {value: 'other', viewValue: '其他'}
      ]
    }
  ];

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
