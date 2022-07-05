import { Role } from '../../models/role.model';
import { SAMPLE_ROLES } from '../../repository/sampleData';
import { StorageService } from 'src/app/shared/services/storage.service';
import { MatTableDataSource } from '@angular/material/table';

export class RolesDataSource extends MatTableDataSource<Role> {
  
  constructor() {
    let data =  StorageService.get<Role[]>('Roles');
    if (data === null) {
      StorageService.set<Role[]>('Roles', SAMPLE_ROLES);
      data = SAMPLE_ROLES;
    }

    super(data);

    this.filterPredicate = (data: Role, filter: string) => {
      return filter !== '' ? data.name.trim().toLowerCase().includes(filter.trim().toLocaleLowerCase()) : true;
    }
  }

  addRole(role: Role) {
    this.data.push(new Role(role.name));
    StorageService.set<Role[]>('Roles', this.data);
  }

  updateRoleName(id: string, name: string) {
    const role = this.data.find(i => i.id === id);
    
    if (role) {
      role.name = name;
      StorageService.set<Role[]>('Roles', this.data);
    }
  }

  removeRole(roleId: string) {
    const roleIndex = this.data.findIndex(i => i.id === roleId)
    this.data.splice(roleIndex, 1);
    StorageService.set<Role[]>('Roles', this.data);
  }
}
