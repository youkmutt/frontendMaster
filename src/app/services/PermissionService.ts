// src/app/services/PermissionService.ts

// Define your roles or permissions somewhere
export type Role = "ADMIN" | "MANAGER" | "USER";
export type Action = "READ" | "WRITE" | "DELETE";

// This is a simple example:
// which role can perform which action
const rolePermissions: Record<Role, Action[]> = {
  ADMIN: ["READ", "WRITE", "DELETE"],
  MANAGER: ["READ", "WRITE"],
  USER: ["READ"],
};

class PermissionService {
  private role: Role;

  constructor(role: Role) {
    this.role = role;
  }

  canPerform(action: Action): boolean {
    return rolePermissions[this.role]?.includes(action) ?? false;
  }
}

export default PermissionService;
