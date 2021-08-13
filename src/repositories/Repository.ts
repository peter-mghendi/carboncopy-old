import { Model } from "@/models";

export interface Repository<T extends Model> {
  getAllAsync(): Promise<T[]>;
}
