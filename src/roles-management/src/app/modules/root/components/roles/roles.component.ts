import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Role } from '../../models/role.model';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { RolesDataSource } from './roles-datasource';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Role>;
  dataSource: RolesDataSource;

  searchQuery: string;
  displayedColumns = ['id', 'name', 'action'];

  constructor(private dialog: MatDialog) {
    this.dataSource = new RolesDataSource();
    this.searchQuery = '';
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  addRole(role: Role) {
    this.dataSource.addRole(role);
  }

  updateRoleName(role: Role) {
    this.dataSource.updateRoleName(role.id, role.name);
  }

  removeRole(role: Role) {
    this.dataSource.removeRole(role.id);
  }

  applyFilter() {
    this.dataSource.filter = this.searchQuery !== '' ? this.searchQuery.trim().toLocaleLowerCase() : '';
  }

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '350px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add New Role') {
        this.addRole(result.data);
      } else if (result.event == 'Update Role') {
        this.updateRoleName(result.data);
      } else if (result.event == 'Delete') {
        this.removeRole(result.data);
      }
    });
  }
}
