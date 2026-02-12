import type {
  TeamsResultPage, TeamFields, TeamsIncluded, Team,
  TeamMembership, TeamLink, TeamPermissionSetting
} from "./lib/identity.ts";

type TODO = unknown;

// Common API client contract
interface ApiClient {
  fetchJson(opts: {
    method: "GET" | "POST" | "DELETE";
    path: string;
    query?: URLSearchParams;
    body?: unknown;
  }): Promise<unknown>;
}

export default class DatadogTeamsApi {
  #api: ApiClient;
  constructor(api: ApiClient) {
    this.#api = api;
  }

  /**
   * Get the list of all users in the organization.
   * This list includes all users even if they are deactivated or unverified.
   */
  async listTeams(opts: {
    page?: number;
    per_page?: number;
    sort?: {
      field: "name" | "user_count";
      order?: "asc" | "desc";
    };
    filterKeyword?: string;
    filterMe?: boolean;
    fieldsTeam?: Array<TeamFields>;
  } = {}): Promise<TeamsResultPage<Team> & TeamsIncluded> {
    const qs = new URLSearchParams();
    if (opts.page != null) qs.set("page[number]", `${opts.page}`);
    if (opts.per_page != null) qs.set("page[size]", `${opts.per_page}`);
    if (opts.sort != null) qs.set("sort",
      `${opts.sort.order == 'desc' ? '-' : ''}${opts.sort.field}`);
    if (opts.filterKeyword != null) qs.set("filter[keyword]", `${opts.filterKeyword}`);
    if (opts.filterMe != null) qs.set("filter[me]", `${opts.filterMe}`);
    if (opts.fieldsTeam) qs.set("fields[team]", opts.fieldsTeam.join(','));

    const json = await this.#api.fetchJson({
      path: `/api/v2/team`,
      method: "GET",
      query: qs,
    });
    return json as TeamsResultPage<Team> & TeamsIncluded;
  }

  /** Get a team in the organization specified by the team’s team_id. */
  async getTeam(teamId: string): Promise<{data: Team}> {
    const json = await this.#api.fetchJson({
      method: "GET",
      path: `/api/v2/team/${encodeURIComponent(teamId)}`,
    });
    return json as {data: Team};
  }

  /** Get a list of members for a team */
  async getTeamMemberships(teamId: string): Promise<TeamsResultPage<TeamMembership>> {
    const json = await this.#api.fetchJson({
      method: "GET",
      path: `/api/v2/team/${encodeURIComponent(teamId)}/memberships`,
    });
    return json as TeamsResultPage<TeamMembership>;
  }

  /** List the links for a team */
  async listTeamLinks(teamId: string): Promise<Array<TeamLink>> {
    const json = await this.#api.fetchJson({
      method: "GET",
      path: `/api/v2/team/${encodeURIComponent(teamId)}/links`,
    });
    return json as Array<TeamLink>;
  }

  /** Get a single link for a team */
  async getTeamLink(teamId: string, linkId: string): Promise<TeamLink> {
    const json = await this.#api.fetchJson({
      method: "GET",
      path: `/api/v2/team/${encodeURIComponent(teamId)}/links/${encodeURIComponent(linkId)}`,
    });
    return json as TeamLink;
  }

  /** Get teams' permission settings */
  async getTeamPermissionSettings(teamId: string): Promise<Array<TeamPermissionSetting>> {
    const json = await this.#api.fetchJson({
      method: "GET",
      path: `/api/v2/team/${encodeURIComponent(teamId)}/permission-settings`,
    });
    return json as Array<TeamPermissionSetting>;
  }

  /** Create a team */
  async createTeam(attributes: {
    name: string;
    handle: string;
  }): Promise<string> {
    const json = await this.#api.fetchJson({
      method: "POST",
      path: `/api/v2/team`,
      body: {
        data: {
          type: "team",
          attributes,
          relationships: {},
        },
      },
    });
    return (json as { status: string }).status;
  }

  /** Delete a team */
  async deleteTeam(teamId: string): Promise<string> {
    const json = await this.#api.fetchJson({
      method: "DELETE",
      path: `/api/v2/team/${encodeURIComponent(teamId)}`,
    });
    return (json as { status: string }).status;
  }

  /** Add a user to a team */
  async addUserToTeam(teamId: string, userId: string): Promise<string> {

    const json = await this.#api.fetchJson({
      method: "POST",
      path: `/api/v2/team/${encodeURIComponent(teamId)}/memberships`,
      body: {
        data: {
          type: "team_memberships",
          id: teamId,
          attributes: {
            role: "admin",
          },
          relationships: {
            user: {
              data: {
                type: "users",
                id: userId,
              },
            },
          },
        },
      },
    });
    return (json as { status: string }).status;
  }
}
