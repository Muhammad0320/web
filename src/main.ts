// import { User } from "./model/User";

import "./style.css";

import axios from "axios";

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

axios.post("http://localhost:3000/users", {
  name: "Muhammad",
  age: 19,
});
