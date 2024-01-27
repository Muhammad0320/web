import { User } from "./model/User";
import { UserForm } from "./views/UserForm";

const collection = User.buildUserCollection();

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();

const user = User.buildUser({ name: "Khabib", age: 32 });

const app = document.getElementById("app");

if (app) {
  const form = new UserForm(app, user);

  form.render();
}
