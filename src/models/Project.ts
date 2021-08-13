import { Model } from ".";

export interface Project extends Model {
  name: string;
  description: string | null;
}
