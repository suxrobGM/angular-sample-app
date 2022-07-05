import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Role } from '../../models/role.model';
import { SAMPLE_ROLES } from '../../repository/sampleData';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Group } from '../../models/group.model';

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

  disconnect(): void {}

  addRole(role: Role) {
    this.data.push(role);
    StorageService.set<Role[]>("Roles", this.data);
    this.paginator?.firstPage();
  }

  updateRoleName(id: string, name: string) {
    const role = this.data.find(i => i.id === id);
    
    if (role) {
      role.name = name;
      StorageService.set<Role[]>("Roles", this.data);
    }
  }

  removeRole(roleId: string) {
    const roleIndex = this.data.findIndex(i => i.id === roleId)
    this.data.splice(roleIndex, 1);
    StorageService.set<Role[]>("Roles", this.data);
  }

  private getPagedData(data: Role[]): Role[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

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

function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
