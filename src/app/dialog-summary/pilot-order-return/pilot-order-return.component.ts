import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PilotOrderService } from '../../service-summary/pilot-order-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectChange } from '@angular/material';

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
  selector: 'app-pilot-order-return',
  templateUrl: './pilot-order-return.component.html',
  styleUrls: ['./pilot-order-return.component.css']
})
export class PilotOrderReturnComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  totalCount: number;
  returnControl: boolean = true;

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

  constructor( 
    private pilotOrderService: PilotOrderService,
    private dialogRef: MatDialogRef<PilotOrderReturnComponent>
  ) { }

  displayedColumns = ['pilot_id', 'name', 'return_type'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.pilotOrderService.getPilotOrderReturnList()
    .subscribe(pilot_order_return_list => {
      this.dataSource.data = pilot_order_return_list;
      this.totalCount = pilot_order_return_list.items.length;
    }
    );
  }

  select_change(event: EventEmitter<MatSelectChange>) {
    console.log(event.source);
    if(event.source){
      // console.log(event.value);
      this.returnControl = !(this.returnControl);
    }
  }

}
