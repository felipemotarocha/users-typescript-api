import { User } from "../../models/user";

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>;
}
