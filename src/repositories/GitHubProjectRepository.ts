import { GitHubFetchMode, githubOptions as options } from "@/config";
import { Project } from "@/models";
import { Octokit } from "octokit";
import { Repository } from ".";

// TODO: Migrate to GraphQL
export class GitHubProjectRepository implements Repository<Project> {
  private readonly _octokit: Octokit = new Octokit();

  public async getAllAsync(): Promise<Project[]> {
    const iterator = this._octokit.paginate.iterator(
      this._octokit.rest.repos.listForUser,
      {
        username: options.username,
        type: options.type,
        sort: options.sort,
        direction: options.direction,
      }
    );

    const projects: Project[] = [];

    for await (const { data: repositories } of iterator) {
      for (const repository of repositories) {
        if (
          options.fetchMode === GitHubFetchMode.Keyword &&
          !repository.description?.includes(options.keyword ?? "")
        )
          continue;

        const project: Project = {
          id: repository.id,
          name: repository.name,
          description: repository.description,
          url: repository.homepage ?? repository.html_url,
        };

        projects.push(project);
      }
    }

    return projects;
  }
}
