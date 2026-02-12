import type {
  TeamsResultPage, TeamMembership,
  UsersResultPage, UsersIncluded,
  User, Permission,
  UserStatus,
  UserInvitation,
} from "./lib/identity.ts";

type TODO = unknown;

// Common API client contract
interface ApiClient {
  fetchJson(opts: {
    path: string,
    query?: URLSearchParams,
  }): Promise<unknown>;
}

export default class DatadogUsersApi {
  #api: ApiClient;
  constructor(api: ApiClient) {
    this.#api = api;
  }

  /**
   * Get the list of all users in the organization.
   * This list includes all users even if they are deactivated or unverified.
   */
  async listUsers(opts: {
    page?: number;
    per_page?: number;
    sort?: {
      field: "name" | "modified_at" | "user_count";
      order?: "asc" | "desc";
    };
    filter?: string;
    filterStatus?: Array<UserStatus>;
  } = {}): Promise<UsersResultPage<User> & UsersIncluded> {
    const qs = new URLSearchParams();
    if (opts.page != null) qs.set("page[number]", `${opts.page}`);
    if (opts.per_page != null) qs.set("page[size]", `${opts.per_page}`);
    if (opts.sort != null) qs.set("sort",
      `${opts.sort.order == 'desc' ? '-' : ''}${opts.sort.field}`);
    if (opts.filter != null) qs.set("filter", `${opts.filter}`);
    if (opts.filterStatus) qs.set("filter[status]", opts.filterStatus.join(','));

    const json = await this.#api.fetchJson({
      path: `/api/v2/users`,
      query: qs,
    });
    return json as UsersResultPage<User> & UsersIncluded;
  }

  /** Get a user in the organization specified by the user’s user_id. */
  async getUser(userId: string): Promise<{data: User} & UsersIncluded> {
    const json = await this.#api.fetchJson({
      path: `/api/v2/users/${encodeURIComponent(userId)}`,
    });
    return json as {data: User} & UsersIncluded;
  }

  /** Returns the user information and all organizations joined by this user. */
  async getUserOrgs(userId: string): Promise<{data: User} & UsersIncluded> {
    const json = await this.#api.fetchJson({
      path: `/api/v2/users/${encodeURIComponent(userId)}/orgs`,
    });
    return json as {data: User} & UsersIncluded;
  }

  /** Returns a list of the user’s permissions granted by the associated user’s roles. */
  async getUserPermissions(userId: string): Promise<{data: Array<Permission>}> {
    const json = await this.#api.fetchJson({
      path: `/api/v2/users/${encodeURIComponent(userId)}/permissions`,
    });
    return json as {data: Array<Permission>};
  }

  /** Returns a single user invitation by its UUID. */
  async getUserInvitation(uuid: string): Promise<{data: UserInvitation}> {
    const json = await this.#api.fetchJson({
      path: `/api/v2/user_invitations/${encodeURIComponent(uuid)}`,
    });
    return json as {data: UserInvitation};
  }

  /** Get a list of memberships for a user */
  async getUserMemberships(userId: string): Promise<{data: TeamsResultPage<TeamMembership>}> {
    const json = await this.#api.fetchJson({
      path: `/api/v2/users/${encodeURIComponent(userId)}/memberships`,
    });
    return json as {data: TeamsResultPage<TeamMembership>};
  }

}
