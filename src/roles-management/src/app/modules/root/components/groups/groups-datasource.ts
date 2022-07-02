import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Group } from '../../models/group.model';
import { Role } from '../../models/role.model';


const EXAMPLE_DATA: Group[] = mockData();

function mockData(): Group[] {
  const roles = [
    new Role("Pizza editor"),
    new Role("Dust sniffer"),
    new Role("Poker cheater"),
    new Role("Drug user")
  ]

  const admins = new Group("Admins");
  const generalManagers = new Group("General Managers");
  const managersTech = new Group("Managers - Tech");
  const managersBilling = new Group("Managers - Billing");
  const managersSales = new Group("Managers - Sales");
  const supportTech = new Group("Support - Tech");
  const supportBilling = new Group("Support - Billing");
  const supportSales = new Group("Support - Sales");

  roles.forEach(i => {
    admins.addRole(i);
    generalManagers.addRole(i);
    managersTech.addRole(i);
    managersBilling.addRole(i);
    managersSales.addRole(i);
    supportTech.addRole(i);
    supportBilling.addRole(i);
    supportSales.addRole(i);
  });

  return [
    admins, generalManagers, managersTech,
    managersBilling, managersSales, supportTech,
    supportBilling, supportSales
  ]
}

/**
 * Data source for the Groups view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class GroupsDataSource extends DataSource<Group> {
  data: Group[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Group[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Group[]): Group[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Group[]): Group[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
