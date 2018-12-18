import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StatusService } from '../../service-summary/status.service';

@Component({
  selector: 'app-furlough',
  templateUrl: './furlough.component.html',
  styleUrls: ['./furlough.component.css']
})
export class FurloughComponent implements OnInit {
  dataSource: MatTableDataSource<any>;

  displayedColumns = ['pilot_id_name', 'cancel'];

  constructor( 
    private statusService: StatusService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    setTimeout((_ => this.dataSource.data = this.statusService.getFurloughData()), 2000);
  }

}
