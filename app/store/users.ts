import { UserModel } from "../interfaces/UserModel";

const users: UserModel[] = [];

for (let i = 0; i < 20; i++) {
  users.push(
    new UserModel(i, "Shakibul Islam " + i, {
      uri: `http://lorempixel.com/${100 + i}/${100 + i}/`,
    }),
  );
}

export { users };
