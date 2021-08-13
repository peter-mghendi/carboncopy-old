import { Model } from ".";

export interface Post extends Model {
  image: string;
  title: string;
  description: string;
  published: Date;
}
