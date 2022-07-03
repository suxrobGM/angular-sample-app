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

  selectedRole: Role | undefined;
  displayedColumns = ['id', 'name', 'action'];

  constructor(private dialog: MatDialog) {
    this.dataSource = new RolesDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  addRole() {
    this.dataSource.addRole(new Role("new role"));
  }

  updateRoleName(role: Role) {
    this.dataSource.updateRoleName(role.id, role.name);
  }

  deleteRole(role: Role) {
    this.dataSource.deleteRole(role.id);
  }

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '350px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRole();
      } else if (result.event == 'Update') {
        this.updateRoleName(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRole(result.data);
      }
    });
  }
}
