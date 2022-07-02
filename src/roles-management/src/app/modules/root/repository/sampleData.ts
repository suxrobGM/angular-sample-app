import { Group } from "../models/group.model";
import { Role } from "../models/role.model";

export const SAMPLE_ROLES = [
    new Role("Pizza editor"),
    new Role("Dust sniffer"),
    new Role("Poker cheater"),
    new Role("Drug user")
]

export const SAMPLE_GROUPS = constructGroups();

function constructGroups(): Group[] {
    const groups = [
        new Group("Admins"),
        new Group("General Managers"),
        new Group("Managers - Tech"),
        new Group("Managers - Billing"),
        new Group("Managers - Sales"),
        new Group("Support - Tech"),
        new Group("Support - Billing"),
        new Group("Support - Sales")
    ];

    SAMPLE_ROLES.forEach(role => {
        groups.forEach(group => group.addRole(role));
    });
  
    return groups;
  }