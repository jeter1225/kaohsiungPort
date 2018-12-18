import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { StatusService } from '../../service-summary/status.service';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.css']
})
export class WorkingComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<any>;
  constructor( 
    private statusService: StatusService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    
    setTimeout((_ => this.dataSource.data = this.statusService.getWorkingData()), 2000);
    setTimeout((_ => console.log(this.dataSource.data)), 2500);
  }

}
