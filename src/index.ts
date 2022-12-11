import express from "express";
import { config } from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";

config();

const app = express();

const port = process.env.PORT || 8000;

app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();

  const getUsersController = new GetUsersController(mongoGetUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  res.send(body).status(statusCode);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
