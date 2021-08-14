import { Project } from "@/models";
import { Octokit } from "octokit";
import { Repository } from ".";

// TODO Future FetchMode based on GitHub Topics
// REF https://docs.github.com/rest/reference/repos#get-all-repository-topics
enum FetchMode {
  All,
  HashTag,
  // Topic
}

// Set this to your GitHub username.
const username = "sixpeteunder";

// Whether to fetch all or by topic.
const fetchMode: FetchMode = FetchMode.HashTag;

// Topic to fetch repos by.
const hashtag: `#${string}` = "#showcase";

// type: all, owner, member.
// sort	no Can be one of created, updated, pushed, full_name.
// direction of asc or desc. Default: asc when using full_name, otherwise desc

// TODO: Migrate to GraphQL
export class GitHubProjectRepository implements Repository<Project> {
  private readonly _octokit: Octokit = new Octokit();

  public async getAllAsync(): Promise<Project[]> {
    const config = { username };
    const iterator = this._octokit.paginate.iterator(
      this._octokit.rest.repos.listForUser,
      config
    );

    const projects: Project[] = [];

    for await (const { data: repositories } of iterator) {
      for (const repository of repositories) {
        if (
          fetchMode === FetchMode.HashTag &&
          !repository.description?.includes(hashtag)
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
