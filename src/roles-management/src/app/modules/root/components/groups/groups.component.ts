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
  @ViewChild(MatTable) table!: MatTable<GroupItem>;
  dataSource: GroupsDataSource;

  displayedColumns = ['required', 'name'];
  groups: GroupItem[];
  roles: Role[];
  selectedGroup: Group;

  constructor(private dialog: MatDialog) {
    this.dataSource = new GroupsDataSource();
    this.groups = [];
    this.roles = this.dataSource.roles;

    this.dataSource.groups.forEach((item, i) => {
      this.groups.push({active: i === 0, group: item});
    });

    this.selectedGroup = this.groups[0]?.group;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  selectGroup(groupItem: GroupItem) {
    this.groups.forEach(group => group.active = false);
    groupItem.active = true;
    this.selectedGroup = groupItem.group;
  }

  addGroup(group: Group) {
    this.groups.push({active: false, group: group});
    this.dataSource.addGroup(group.name);
  }

  updateGroupName(group: Group) {
    this.dataSource.updateGroupName(group.id, group.name);
  }

  removeGroup(group: Group) {
    this.dataSource.removeGroup(group.id);
    this.selectedGroup = this.groups[0]?.group;
  }

  roleIsInGroup(role: Role): boolean {
    return this.selectedGroup.roles?.findIndex(i => i === role.id) >= 0;
  }

  checkRole(event: MatCheckboxChange, role: Role) {
    if (event.checked) {
      this.dataSource.addRoleToGroup(role, this.selectedGroup);
    } else {
      this.dataSource.removeRoleFromGroup(role, this.selectedGroup);
    }
  }

  trackGroups(index: number, groupItem: GroupItem): string {
    return groupItem.group.id;
  }

  showActionButtons(event: Event) {
    
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
