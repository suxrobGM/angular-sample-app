import { Group } from '../../models/group.model';
import { Role } from '../../models/role.model';
import { SAMPLE_GROUPS, SAMPLE_ROLES } from '../../repository/sampleData';
import { StorageService } from 'src/app/shared/services/storage.service';
import { MatTableDataSource } from '@angular/material/table';

export class GroupsDataSource extends MatTableDataSource<Role> {
  groups: Group[];
  currentGroup: Group | undefined;

  constructor() {
    let roles =  StorageService.get<Role[]>('Roles');
    let groups = StorageService.get<Group[]>('Groups');

    if (roles === null) {
      StorageService.set<Role[]>('Roles', SAMPLE_ROLES);
      roles = SAMPLE_ROLES;
    }

    if (groups === null) {
      StorageService.set<Group[]>('Groups', SAMPLE_GROUPS);
      groups = SAMPLE_GROUPS;
    }

    super(roles);
    this.groups = groups;

    this.filterPredicate = (data: Role, filter: string) => {
      const filterTokens = filter.split(',');
      const roleFilterValue = filterTokens.length > 0 ? filterTokens[0] : 'show_all';
      const searchValue = filterTokens.length > 1 ? filterTokens[1] : '';

      if (roleFilterValue === 'marked_roles' && this.currentGroup) {
        return this.currentGroup.roles.includes(data.id) && data.name.trim().toLowerCase().includes(searchValue);
      }
      
      return data.name.trim().toLowerCase().includes(searchValue);
    }
  }

  public addRoleToGroup(role: Role, groupId: string) {
    const group = this.groups.find(i => i.id === groupId);

    if (group) {
      group.roles.push(role.id);
      StorageService.set<Group[]>('Groups', this.groups);
    }
  }

  public removeRoleFromGroup(role: Role, groupId: string) {
    const group = this.groups.find(i => i.id === groupId);

    if (group) {
      group.roles.splice(group.roles.indexOf(role.id), 1);
      StorageService.set<Group[]>('Groups', this.groups);
    }
  }

  public addGroup(name: string): Group {
    const newGroup = new Group(name);
    this.groups.push(newGroup);
    StorageService.set<Group[]>('Groups', this.groups);
    return newGroup;
  }

  public updateGroupName(id: string, name: string) {
    const group = this.groups.find(i => i.id === id);
    
    if (group) {
      group.name = name;
      StorageService.set<Group[]>('Groups', this.groups);
    }
  }

  public removeGroup(groupId: string) {
    const index = this.groups.findIndex(i => i.id === groupId);
    this.groups.splice(index, 1);
    StorageService.set<Group[]>('Groups', this.groups);
  }
}
