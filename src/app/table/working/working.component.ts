import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StatusService } from '../../service-summary/status.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BreakDialogComponent } from '../../dialog-summary/break-dialog/break-dialog.component';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.css']
})
export class WorkingComponent implements OnInit {
  dataSource: MatTableDataSource<any>;

  displayedColumns = ['pilot_id_name', 'ship'];
  
  constructor( 
    private statusService: StatusService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    setTimeout((_ => this.dataSource.data = this.statusService.getWorkingData()), 2000);
  }

  
  

}
