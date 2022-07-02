import { Role } from "./role.model";
import { v4 as uuid } from 'uuid';

export class Group {
    id: string;
    name: string;
    roles: GroupRoleType[];

    constructor(name: string) {
        this.id = uuid();
        this.name = name;
        this.roles = [];
    }

    public addRole(role: Role, required = true) {
        this.roles.push({
            required: required,
            role: role
        });
    }

    public removeRole(role: Role) {
        const groupRole = this.roles.find(i => i.role.id === role.id) as GroupRoleType;

        if (groupRole) {
            this.roles.splice(this.roles.indexOf(groupRole), 1);
        }
    }

    public removeRoleByName(roleName: string) {
        const groupRole = this.roles.find(i => i.role.name === roleName) as GroupRoleType;

        if (groupRole) {
            this.roles.splice(this.roles.indexOf(groupRole), 1);
        }
    }
}

type GroupRoleType = {
    required: boolean;
    role: Role;
}
