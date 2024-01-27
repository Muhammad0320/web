import { User } from "./model/User";
import { UserEdits } from "./views/UserEdits";

const user = User.buildUser({ name: "Khabib", age: 32 });

const app = document.getElementById("app");

if (app) {
  const userEdit = new UserEdits(app, user);

  userEdit.render();
}
