import { User } from "./model/User";
import { UserForm } from "./views/UserForm";

const collection = User.buildUserCollection();

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();

const form = new UserForm(document.getElementById("app")!);

form.render();
