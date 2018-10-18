import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface InformationTableItem {
  applyTime_vslSituation_serialNumber: string;
  vslName: string;
  pilot: string;
  vslNumber_voyage_mooringInTransferOut: string;
  status_pilotNumber_way_nearSpan: string;
  tugboat_tons: string;
  agentCodeName_dangerousVsl: string;
  departureTime: string;
  frontWaterline_HinderWaterline: string;
  latestModifyDepartureTime_vslAge: string;
  anchorTime_anchorPosition_bowThruster: string;
  bringCable_dispatchStation: string;
  previousPort_nextPort: string;
  guideBoatRemark: string;
}

// TODO: replace this with real data from your application
export const EXAMPLE_DATA: InformationTableItem[] = [
  { applyTime_vslSituation_serialNumber: '4', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
    tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
    anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
  },
  { applyTime_vslSituation_serialNumber: '5', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
    tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
    anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
  }
];

/**
 * Data source for the InformationTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class InformationTableDataSource extends DataSource<InformationTableItem> {
  data: InformationTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<InformationTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData([...this.data]);
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: InformationTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
