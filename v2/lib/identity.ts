type TODO = unknown;

export interface UsersResultPage<T> {
  meta: {
    page: {
      total_filtered_count: number;
      total_count: number;
    };
  };
  data: Array<T>;
}

export interface TeamsResultPage<T> {
 links: {
    first: string | null;
    last: string | null;
    next: string | null;
    prev: string | null;
    self: string;
  };
  meta: {
    pagination: {
      first_offset: number;
      last_offset: number;
      limit: number;
      next_offset: number;
      offset: number;
      prev_offset: number;
      total: number;
      type: string;
    }
  }
  data: Array<T>;
}

export interface UsersIncluded {
  included: Array<Role | Permission | User | Organization>;
}

export interface TeamsIncluded {
  included: Array<User | TeamLink | UserTeamPermission>;
}

export type Ref<T extends string> = {
  id: string;
  type: T;
}


export interface Role {
  type: "roles";
  id: string;
  attributes: {
    name: string;
    created_at: string; // iso date

    modified_at: string;
    user_count?: number;
  };
  relationships: {
    permissions: {
      data: Array<Ref<"permissions">>;
    };
  };
}

export type UserStatus = "Active" | "Pending" | "Disabled";

export interface User {
  type: "users";
  id: string;
  attributes: {
    name: string;
    created_at: string; // iso date

    handle: string;
    email: string;
    icon: string;
    title: string | null;
    verified: boolean;
    disabled: boolean;
    allowed_login_methods: TODO[];
    status: UserStatus;
  };
  relationships: {
    roles: {
      data: Array<Ref<"roles">>;
    };
    org: {
      data: Ref<"orgs">;
    };
    other_orgs?: {
      data: Array<Ref<"orgs">>;
    };
    other_users?: {
      data: Array<Ref<"users">>;
    };
  };
}

export interface Permission {
  type: "permissions";
  id: string;
  attributes: {
    name: string;
    created: string; // iso date

    display_name: string;
    description: string;
    group_name: string;
    display_type: "read" | "write" | "other";
    restricted: boolean;
  };
}

export interface Organization {
  type: "orgs";
  id: string;
  attributes: {
    name: string;
    created_at: string; // iso date

    modified_at: string; // iso date
    public_id: string;
    description: string | null;
    sharing: string;
    url: string | null;
    disabled: boolean;
  };
}

export interface UserInvitation {
  type: "user_invitations";
  id: string;
  attributes: {
    created_at: string; // iso date

    expires_at: string; // iso date
    invite_type: string;
    uuid: string;
  };
}

export interface TeamLink {
  type: "team_links";
  id: string;
  attributes: {
    label: string;
    position: number;
    team_id: string;
    url: string;
  }
}

export interface UserTeamPermission {
  type: "user_team_permissions";
  id: string;
  attributes: Ref<"permissions">
}

export interface TeamPermissionSetting {
  type: "team_permission_settings";
  id: string;
  attributes: {
    action: "manage_membership" | "edit";
    editable: boolean;
    options?: Array<string>;
    title: string;
    value: "admins" | "members" | "organization" | "user_access_manage" | "teams_manage";
  }
}

export type TeamFields = "users" | "team_links" | "user_team_permissions";

export interface Team {
  type: "team";
  id: string;
  attributes: {
    avatar?: string;
    banner?: number;
    created_at?: string; // iso date
    description?: string;
    handle: string;
    hidden_modules?: Array<string>;
    link_count?: number;
    modified_at?: string; // iso date
    name: string;
    summary?: string;
    user_count?: number;
    visible_modules?: Array<string>;
  };
  relationships: {
    team_links?: {
      data: Array<Ref<"team_links">>;
      links: {
        related: string;
      };
    };
    user_team_permissions?: {
      data: Array<Ref<"user_team_permissions">>;
      links: {
        related: string;
      };
    };
    users?: {
      data: Array<Ref<"users">>
    }
  };
}

export interface TeamMembership {
  type: "team_memberships";
  id: string;
  attributes: {
    role: "admin"
  };
  relationships: {
    user: {
      data: Ref<"user">
    }
  }
}
