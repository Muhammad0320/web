import { User } from "./model/User";

import "./style.css";

const user = User.buildUser({ id: "04c5", name: "Just a name", age: 36 });

user.on("save", () => {
  console.log("User data was saved");
});

user.fetch();
