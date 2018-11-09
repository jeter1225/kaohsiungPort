import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import { InformationTableDataSource, InformationTableItem } from './information-table-datasource';
import { ConfigLogService } from '../config-log.service';

@Component({
  selector: 'app-information-table',
  templateUrl: './information-table.component.html',
  styleUrls: ['./information-table.component.css']
})
export class InformationTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  dataSource: MatTableDataSource<any>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['applyTime_vslSituation_serialNumber', 'vslName', 'pilot', 'vslNumber_voyage_mooringInTransferOut',
  'status_pilotNumber_way_nearSpan', 'tugboat_tons', 'agentCodeName_dangerousVsl', 'departureTime_ETA',
  'frontWaterline_HinderWaterline', 'latestModifyDepartureTime_vslAge', 'anchorTime_anchorPosition_bowThruster',
  'bringCable_dispatchStation', 'previousPort_nextPort', 'guideBoatRemark'];

  constructor( private configLogService: ConfigLogService) {
    
  }

  ngOnInit() {
      this.dataSource = new MatTableDataSource();
      this.dataSource.paginator = this.paginator;
      this.configLogService.getInformation()
      .subscribe(information_table_list => this.dataSource.data = information_table_list);
      setTimeout(() => {console.log(this.dataSource.data)}, 3000);
    };
  onSearchClear(){
    this.searchKey= "";
    this.applyFilter();
  };
  applyFilter(){
    this.dataSource.filter =this.searchKey.trim().toLowerCase();
  };
}
