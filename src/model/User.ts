import { Eventing } from "./Eventing";

export interface UserProps {
  name?: string;
  age?: number;
  id?: string;
}

type UserReturn = number | string;

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: "name" | "age" | "id"): UserReturn {
    return this.data[propName]!;
  }

  set(newData: UserProps) {
    Object.assign(this.data, newData);
  }
}
