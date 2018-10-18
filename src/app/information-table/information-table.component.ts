import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import { InformationTableDataSource, EXAMPLE_DATA} from './information-table-datasource';


@Component({
  selector: 'app-information-table',
  templateUrl: './information-table.component.html',
  styleUrls: ['./information-table.component.css']
})
export class InformationTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  dataSource = new MatTableDataSource(EXAMPLE_DATA) ;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['applyTime_vslSituation_serialNumber', 'vslName', 'pilot', 'vslNumber_voyage_mooringInTransferOut',
  'status_pilotNumber_way_nearSpan', 'tugboat_tons', 'agentCodeName_dangerousVsl', 'departureTime',
  'frontWaterline_HinderWaterline', 'latestModifyDepartureTime_vslAge', 'anchorTime_anchorPosition_bowThruster',
  'bringCable_dispatchStation', 'previousPort_nextPort', 'guideBoatRemark'];

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  };
  onSearchClear(){
    this.searchKey= "";
    this.applyFilter();
  };
  applyFilter(){
    this.dataSource.filter =this.searchKey.trim().toLowerCase();
  };
}
