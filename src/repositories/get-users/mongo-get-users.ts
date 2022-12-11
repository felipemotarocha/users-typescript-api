import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Felipe",
        lastName: "Rocha",
        email: "felipe@gmail.com",
        password: "123",
      },
    ];
  }
}
