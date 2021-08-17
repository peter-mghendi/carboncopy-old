export enum DevToFetchMode {
    All,
    Tag,
    Collection,
}

// TODO Future FetchMode based on GitHub Topics
// REF https://docs.github.com/rest/reference/repos#get-all-repository-topics
export enum GitHubFetchMode {
    All,
    Keyword,
    // Topic
}

interface DevToProjectRepositoryOptions {
    username: string;
    fetchMode: DevToFetchMode;
    tag?: string;
    collection_id?: number;
}

interface GitHubProjectRepositoryOptions {
    username: string;
    fetchMode: GitHubFetchMode;
    keyword?: string;
    type?: "all" | "owner" | "member";
    sort?: "updated" | "created" | "pushed" | "full_name";
    direction?: "asc" | "desc"
}

interface SiteOptions {
    name: string;
    bio: string;
    social?: {
        devto?: `https://dev.to/${string}`;
        github?: `https://github.com/${string}`;
        linkedin?: `https://linkedin.com/in/${string}`;
        twitter?: `https://twitter.com/${string}`;
    }
}

export const devtoOptions: DevToProjectRepositoryOptions = {
    username: "sixpeteunder",
    fetchMode: DevToFetchMode.All,
}

export const githubOptions: GitHubProjectRepositoryOptions = {
    username: "sixpeteunder",
    fetchMode: GitHubFetchMode.Keyword,
    keyword: "#showcase",
}

export const siteOptions : SiteOptions = {
    name: "Pete",
    bio: "I are programmer. I make computer beep beep boop.",
    social: {
        devto: `https://dev.to/${devtoOptions.username}`,
        github: `https://github.com/${githubOptions.username}`,
        linkedin: `https://linkedin.com/in/peter-lenjo`,
        twitter: "https://twitter.com/sixpeteunder",
    },
}