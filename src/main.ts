import { User } from "./model/User";

import "./style.css";

// const user = new User({ name: "max", age: 30 });

// user.on("change", () => {
//   console.log("Change #1");
// });

// user.on("change", () => {
//   console.log("Change #2");
// });

// user.on("save", () => {
//   console.log("Save #1");
// });

// user.trigger("change");

// user.trigger("save");

const user = new User({ id: "04c5" });

await user.fetch();
