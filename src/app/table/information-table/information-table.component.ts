import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { InformationService } from '../../service-summary/information-service.service';
import { filter } from 'rxjs/operators';
import { Global } from '../../global';

@Component({
  selector: 'app-information-table',
  templateUrl: './information-table.component.html',
  styleUrls: ['./information-table.component.css']
})
export class InformationTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey1: string;
  searchKey2: string;
  searchKey3: string;
  searchKey4: string;
  

  filterJson = {vslNumber: '',vslName:'', mooringInTransferOut:'', agentCodeName:''};
  dataSource: MatTableDataSource<any>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['applyTime_vslSituation_serialNumber', 'vslName', 'pilot', 'vslNumber_voyage_mooringInTransferOut',
  'status_pilotNumber_way_nearSpan', 'tugboat_tons', 'agentCodeName_dangerousVsl', 'departureTime_ETA',
  'frontWaterline_HinderWaterline', 'latestModifyDepartureTime_vslAge', 'anchorTime_anchorPosition_bowThruster',
  'bringCable_dispatchStation', 'previousPort_nextPort', 'guideBoatRemark'];

  constructor( 
    private informationService: InformationService,
    private global: Global
  ) {
    
  }

  ngOnInit() {
      this.dataSource = new MatTableDataSource();
      this.dataSource.paginator = this.paginator;
      this.informationService.getInformation().subscribe(information_table_list => this.dataSource.data = information_table_list);
      this.dataSource.filterPredicate = (data, filter: string) => {
        const filters = JSON.parse(filter);
        return data.vslNumber.toLowerCase().includes(filters.vslNumber) 
               && (data.vslName_chi.includes(filters.vslName) || data.vslName_eng.toLowerCase().includes(filters.vslName)) 
               && data.vsl_from_to.toLowerCase().includes(filters.mooringInTransferOut) 
               && data.agentCodeName.toLowerCase().includes(filters.agentCodeName) ;
      }
    };
  onSearchClear1(){
    this.searchKey1= "";
    this.applyFilter1();
  };
  applyFilter1(){
    this.filterJson.vslNumber = this.searchKey1.trim().toLowerCase();
    this.dataSource.filter = JSON.stringify(this.filterJson);
  };
  onSearchClear2(){
    this.searchKey2= "";
    this.applyFilter2();
  };
  applyFilter2(){
    this.filterJson.vslName = this.searchKey2.trim().toLowerCase();
    this.dataSource.filter = JSON.stringify(this.filterJson);
  };
  onSearchClear3(){
    this.searchKey3= "";
    this.applyFilter3();
  };
  applyFilter3(){
    this.filterJson.mooringInTransferOut = this.searchKey3.trim().toLowerCase();
    this.dataSource.filter = JSON.stringify(this.filterJson);
  };
  onSearchClear4(){
    this.searchKey4= "";
    this.applyFilter4();
  };
  applyFilter4(){
    this.filterJson.agentCodeName = this.searchKey4.trim().toLowerCase();
    this.dataSource.filter = JSON.stringify(this.filterJson);
  };
  ebbFlowIn(){
    window.open('');
  }
  ebbFlowOut(){
    window.open('http://163.29.117.247/port/');
  }
  windDirection(){
    window.open('http://163.29.117.214/DelphiWWW/VDMSWWW_MET.html');
  }
}
