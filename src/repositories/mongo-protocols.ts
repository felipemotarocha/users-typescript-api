import { User } from "../models/user";

export type MongoUser = Omit<User, "id">;
