import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Role } from '../../models/role.model';
import { SAMPLE_ROLES } from '../../repository/sampleData';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Group } from '../../models/group.model';

/**
 * Data source for the Roles view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class RolesDataSource extends DataSource<Role> {
  data: Role[];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();

    const data =  StorageService.get<Role[]>("Roles");
    if (data === null) {
      StorageService.set<Role[]>("Roles", SAMPLE_ROLES);
      this.data = SAMPLE_ROLES;
    }
    else {
      this.data = data;
    }
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Role[]> {
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

  addRole(role: Role) {
    this.data.push(role);
    StorageService.set<Role[]>("Roles", this.data);
    this.paginator?.firstPage();
  }

  deleteRole(roleId: string) {
    const roleIndex = this.data.findIndex(i => i.id === roleId)
    this.data.splice(roleIndex, 1);
    StorageService.set<Role[]>("Roles", this.data);
    // const groups = StorageService.get<Group[]>("Groups");

    // groups?.forEach(group => {
    //   const idx = group.roles.findIndex(i => i.role.id === role.id);
    //   group.roles.splice(idx, 1);
    // });

    // if (groups !== null)
    //   StorageService.set<Group[]>("Groups", groups);
  }

  updateRoleName(id: string, name: string) {
    const role = this.data.find(i => i.id === id);
    
    if (role) {
      role.name = name;
      StorageService.set<Role[]>("Roles", this.data);
    }
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Role[]): Role[] {
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
  private getSortedData(data: Role[]): Role[] {
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
