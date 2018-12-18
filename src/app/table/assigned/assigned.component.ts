import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { StatusService } from '../../service-summary/status.service';

@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.css']
})
export class AssignedComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<any>;
  constructor( 
    private statusService: StatusService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    
    // setTimeout((_ => this.dataSource.data = this.statusService.getAssignedData()), 2500);
    // setTimeout((_ => console.log(this.dataSource.data)), 4000);
  }

}
