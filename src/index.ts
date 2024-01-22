import { User } from "./model/User";

const user = new User({ name: "max", age: 30 }).get("age");

console.log(user);
