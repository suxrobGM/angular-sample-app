import { Role } from "./role.model";
import { v4 as uuid } from 'uuid';

export class Group {
    id: string;
    name: string;
    roles: string[];

    constructor(name: string) {
        this.id = uuid();
        this.name = name;
        this.roles = [];
    }

    public addRole(role: Role): void {
        this.roles.push(role.id);
    }

    public removeRole(role: Role): void {
        const roleId = this.roles.find(i => i === role.id);

        if (roleId) {
            this.roles.splice(this.roles.indexOf(roleId), 1);
        }
    }
}