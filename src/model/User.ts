import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
  name?: string;
  age?: number;
  id?: string;
}

type UserReturn = number | string;

export class User {
  public events: Eventing = new Eventing();

  public sync: Sync = new Sync("http://localhost:3000/users");

  constructor(private data: UserProps) {}

  get(propName: "name" | "age" | "id"): UserReturn {
    return this.data[propName]!;
  }

  set(newData: UserProps) {
    Object.assign(this.data, newData);
  }
}
