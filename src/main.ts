import { User } from "./model/User";

import "./style.css";

const user = new User({ id: "04c5" });

user.on("change", () => {
  console.log("User data was changed");
});

user.fetch();
