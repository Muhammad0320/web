import { User } from "./model/User";

import "./style.css";

const user = new User({ name: "max", age: 30 });

user.get("age");
