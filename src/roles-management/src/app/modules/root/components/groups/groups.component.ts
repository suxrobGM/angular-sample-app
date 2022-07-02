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
  @ViewChild(MatTable) table!: MatTable<GroupItem>;
  dataSource: GroupsDataSource;

  displayedColumns = ['required', 'name'];
  groups: GroupItem[];
  selectedGroup: Group;

  constructor() {
    this.dataSource = new GroupsDataSource();
    this.groups = [];

    this.dataSource.groups.forEach((item, i) => {
      this.groups.push({active: i === 0, group: item});
    });

    this.selectedGroup = this.groups[0]?.group;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //this.table.dataSource = this.dataSource;

    //this.selectedGroup = this.groups[0].group;
  }

  clickGroup(groupItem: GroupItem) {
    this.groups.forEach(group => group.active = false);
    groupItem.active = true;
    this.selectedGroup = groupItem.group;
  }

  addGroup() {
    this.groups.push({active: false, group: new Group("New group")});
  }
}

type GroupItem = {
  active: boolean,
  group: Group
}
