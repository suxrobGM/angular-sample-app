import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Group } from '../../models/group.model';
import { GroupsDataSource } from './groups-datasource';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Group>;
  dataSource: GroupsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['required', 'name'];
  groups: GroupItem[];

  constructor() {
    this.dataSource = new GroupsDataSource();
    this.groups = [];
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //this.table.dataSource = this.dataSource;

    this.dataSource.data.forEach((item, i) => {
      this.groups.push({active: i === 0, group: item});
    })
  }

  clickGroup(groupItem: GroupItem) {
    this.groups.forEach(group => group.active = false);
    groupItem.active = true;
  }
}

type GroupItem = {
  active: boolean,
  group: Group
}
