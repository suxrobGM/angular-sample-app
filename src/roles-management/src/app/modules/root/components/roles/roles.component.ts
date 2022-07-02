import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Role } from '../../models/role.model';
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
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new RolesDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  addRole() {
    this.dataSource.addRole(new Role("new role"));
    this.table.renderRows();
  }

  updateRoleName(role: Role) {
    this.dataSource.updateRoleName(role.id, role.name);
  }
}
