import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StatusService } from '../../service-summary/status.service';
import { BreakDialogComponent } from '../../dialog-summary/break-dialog/break-dialog.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.css']
})
export class WorkingComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild( TemplateRef ) dialogTemplate: TemplateRef<any>;
  private overlayRef: OverlayRef;
  private portal: TemplatePortal;
  dataSource: MatTableDataSource<any>;

  displayedColumns = ['pilot_id_name', 'ship'];
  
  constructor( 
    private statusService: StatusService,
    private overlay: Overlay,
    private viewRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    setTimeout((_ => this.dataSource.data = this.statusService.getWorkingData()), 2000);
  }

  ngAfterViewInit() {
    this.portal = new TemplatePortal(this.dialogTemplate, this.viewRef);
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
  }

  ngOnDestroy() {
    this.overlayRef.dispose();
  }

  openDialog() {
    this.overlayRef.attach(this.portal);
  }
  

}
