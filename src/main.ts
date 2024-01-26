import { User } from "./model/User";

const collection = User.buildUserCollection();

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
