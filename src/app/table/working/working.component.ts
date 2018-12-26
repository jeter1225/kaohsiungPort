import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StatusService } from '../../service-summary/status.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReturnDialogComponent } from '../../dialog-summary/return-dialog/return-dialog.component';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.css']
})
export class WorkingComponent implements OnInit {
  dataSource: MatTableDataSource<any>;

  displayedColumns = ['pilot_id_name', 'ship', 'return'];
  
  constructor( 
    private statusService: StatusService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    setTimeout((_ => this.dataSource.data = this.statusService.getWorkingData()), 2000);
  }

  openReturnDialog(id, name) {
    const dialogRef = this.dialog.open(ReturnDialogComponent, {
      width: '800px',
      height: '400px',
      data: {
        pilot_id: id,
        pilot_name: name 
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The return dialog is closed!');
    })
  }

  
  

}
