import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Group } from '../../models/group.model';
import { Role } from '../../models/role.model';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { GroupsDataSource } from './groups-datasource';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Role>;
  dataSource: GroupsDataSource;

  displayedColumns = ['required', 'name'];
  groups: GroupItem[];
  roles: Role[];
  selectedGroup: Group;
  searchQuery: string;
  filterRoles: string;

  constructor(private dialog: MatDialog) {
    this.dataSource = new GroupsDataSource();
    this.groups = [];
    this.roles = [];
    this.searchQuery = '';
    this.filterRoles = 'show_all';

    this.dataSource.groups.forEach((item, i) => {
      this.groups.push({active: i === 0, group: item});
    });

    this.selectedGroup = this.groups[0]?.group;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  applyFilter() {
    const search = this.searchQuery !== '' ? this.searchQuery.trim().toLocaleLowerCase() : '';
    this.dataSource.currentGroup = this.selectedGroup;
    this.dataSource.filter = `${this.filterRoles},${search}`;
  }

  selectGroup(groupItem: GroupItem) {
    this.groups.forEach(group => group.active = false);
    groupItem.active = true;
    this.selectedGroup = groupItem.group;
  }

  addGroup(group: Group) {
    const newGroup = this.dataSource.addGroup(group.name);
    this.groups.push({active: false, group: newGroup});
  }

  updateGroupName(group: Group) {
    this.dataSource.updateGroupName(group.id, group.name);
  }

  removeGroup(group: Group) {
    this.dataSource.removeGroup(group.id);
    const groupItemIndex = this.groups.findIndex(i => i.group.id === group.id);
    this.groups.splice(groupItemIndex, 1);

    if (this.selectedGroup.id === group.id) {
      this.selectGroup(this.groups[0]);
    }
  }

  roleIsInGroup(role: Role): boolean {
    return this.selectedGroup.roles?.findIndex(i => i === role.id) >= 0;
  }

  checkRole(event: MatCheckboxChange, role: Role) {
    if (event.checked) {
      this.dataSource.addRoleToGroup(role, this.selectedGroup.id);
    } else {
      this.dataSource.removeRoleFromGroup(role, this.selectedGroup.id);
    }
  }

  trackGroups(index: number, groupItem: GroupItem): string {
    return groupItem.group.id;
  }

  refreshRoles() {
    this.dataSource.fetchRoles();
  }

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '350px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add Group') {
        this.addGroup(result.data);
      } else if (result.event == 'Update Group') {
        this.updateGroupName(result.data);
      } else if (result.event == 'Delete') {
        this.removeGroup(result.data);
      }
    });
  }
}

type GroupItem = {
  active: boolean,
  group: Group
}
