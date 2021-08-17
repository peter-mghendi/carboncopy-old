import { DevToFetchMode, devtoOptions as options } from "@/config";
import { Post } from "@/models";
import axios from "axios";
import { Repository } from ".";

// TODO Regenerate these from Swagger spec or use a wrapper library
interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

interface DevToArticle {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: Date;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at: Date | null;
  crossposted_at: Date | null;
  published_at: string;
  last_comment_at: Date | null;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: User;
}

export class DevToPostRepository implements Repository<Post> {
  private readonly _client = axios.create({ baseURL: "https://dev.to/api" });

  public async getAllAsync(): Promise<Post[]> {
    const response = await this._client.get<DevToArticle[]>("/articles", {
      params: {
        username: options.username,
        tag: (options.fetchMode === DevToFetchMode.Tag || undefined) && options.tag,
        collection_id: (options.fetchMode === DevToFetchMode.Collection || undefined) && options.collection_id,
      },
    });

    const posts: Post[] = response.data.map((article) => ({
      id: article.id,
      title: article.title,
      description: article.description,
      image: article.cover_image ?? "img/no-image.jpg",
      published: new Date(article.published_at),
      url: article.url,
    }));

    return posts;
  }
}
