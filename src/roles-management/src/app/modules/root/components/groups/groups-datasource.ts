import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Group } from '../../models/group.model';
import { Role } from '../../models/role.model';
import { SAMPLE_GROUPS, SAMPLE_ROLES } from '../../repository/sampleData';
import { StorageService } from 'src/app/shared/services/storage.service';

export class GroupsDataSource extends DataSource<Role> {
  groups: Group[];
  roles: Role[];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();

    const roles =  StorageService.get<Role[]>("Roles");
    const groups = StorageService.get<Group[]>("Groups");

    if (roles === null) {
      StorageService.set<Role[]>("Roles", SAMPLE_ROLES);
      this.roles = SAMPLE_ROLES;
    }
    else {
      this.roles = roles;
    }

    if (groups === null) {
      StorageService.set<Group[]>("Groups", SAMPLE_GROUPS);
      this.groups = SAMPLE_GROUPS;
    }
    else {
      this.groups = groups;
    }
  }

  connect(): Observable<Role[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.roles), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.roles ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  disconnect(): void {}

  public addRoleToGroup(role: Role, group: Group) {
    const localGroup = this.groups.find(i => i.id === group.id);

    if (localGroup) {
      localGroup.roles.push(role.id);
      StorageService.set<Group[]>("Groups", this.groups);
    }
  }

  public removeRoleFromGroup(role: Role, group: Group) {
    const localGroup = this.groups.find(i => i.id === group.id);

    if (localGroup) {
      localGroup.roles.splice(localGroup.roles.indexOf(role.id), 1);
      StorageService.set<Group[]>("Groups", this.groups);
    }
  }

  public addGroup(name: string) {
    this.groups.push(new Group(name));
    StorageService.set<Group[]>("Groups", this.groups);
  }

  public updateGroupName(id: string, name: string) {
    const group = this.groups.find(i => i.id === id);
    
    if (group) {
      group.name = name;
      StorageService.set<Group[]>("Groups", this.groups);
    }
  }

  public removeGroup(groupId: string) {
    const index = this.groups.findIndex(i => i.id === groupId);
    this.groups.splice(index, 1);
    StorageService.set<Group[]>("Groups", this.groups);
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
