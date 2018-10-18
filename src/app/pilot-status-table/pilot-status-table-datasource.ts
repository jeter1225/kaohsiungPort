import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as ObservableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface PilotStatusTableItem {
  name: string;
  pilot_id: number;
  ship_id: string;
  status: string;
  night_shift: string;
  break: string;
  leave: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: PilotStatusTableItem[] = [
  { pilot_id: 1, name: 'Hydrogen', ship_id: '061646', status: '待命中', night_shift: '1', leave: '請假', break: '掛牌' },
  { pilot_id: 2, name: 'Helium', ship_id: '257385', status: '工作中', night_shift: '2', leave: '請假', break: '掛牌' },
  { pilot_id: 3, name: 'Lithium', ship_id: '285953', status: '工作中', night_shift: '1', leave: '請假', break: '掛牌' },
  { pilot_id: 4, name: 'Beryllium', ship_id: '893635', status: '請假中', night_shift: '1', leave: '請假', break: '掛牌' },
  { pilot_id: 5, name: 'Boron', ship_id: '104853', status: '掛牌', night_shift: '1', leave: '請假', break: '掛牌' },
  { pilot_id: 6, name: 'Carbon', ship_id: '594732', status: '已簽船', night_shift: '0', leave: '請假', break: '掛牌' },
  { pilot_id: 7, name: 'Nitrogen', ship_id: '503827', status: '休假', night_shift: '1', leave: '請假', break: '掛牌' },
  { pilot_id: 8, name: 'Oxygen', ship_id: '038598', status: '請假有代班', night_shift: '0', leave: '請假', break: '掛牌' },
  { pilot_id: 9, name: 'Fluorine', ship_id: '019372', status: '請假無代班', night_shift: '0', leave: '請假', break: '掛牌' },
  { pilot_id: 10, name: 'Neon', ship_id: '772847', status: '待命中', night_shift: '1', leave: '請假', break: '掛牌' },
  { pilot_id: 11, name: 'Sodium', ship_id: '598273', status: '待命中', night_shift: '2', leave: '請假', break: '掛牌' },
  { pilot_id: 12, name: 'Magnesium', ship_id: '345232', status: '工作中', night_shift: '0', leave: '請假', break: '掛牌' },
  { pilot_id: 13, name: 'Aluminum', ship_id: '093726', status: '請假有代班', night_shift: '0', leave: '請假', break: '掛牌' },
  { pilot_id: 14, name: 'Silicon', ship_id: '947262', status: '休假', night_shift: '1', leave: '請假', break: '掛牌' },
  { pilot_id: 15, name: 'Phosphorus', ship_id: '947262', status: '掛牌', night_shift: '2', leave: '請假', break: '掛牌' },
  { pilot_id: 16, name: 'Sulfur', ship_id: '993716', status: '工作中', night_shift: '0', leave: '請假', break: '掛牌' },
  { pilot_id: 17, name: 'Chlorine', ship_id: '502827', status: '待命中', night_shift: '2', leave: '請假', break: '掛牌' },
  { pilot_id: 18, name: 'Argon', ship_id: '384726', status: '掛牌', night_shift: '1', leave: '請假', break: '掛牌' },
  { pilot_id: 19, name: 'Potassium', ship_id: '592777', status: '工作中', night_shift: '0', leave: '請假', break: '掛牌' },
  { pilot_id: 20, name: 'Calcium', ship_id: '088323', status: '待命中', night_shift: '0', leave: '請假', break: '掛牌' }
];

/**
 * Data source for the StatusTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PilotStatusTableDataSource extends DataSource<PilotStatusTableItem> {
  data: PilotStatusTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PilotStatusTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      ObservableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
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
  private getPagedData(data: PilotStatusTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: PilotStatusTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'pilot_id': return compare(+a.pilot_id, +b.pilot_id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
