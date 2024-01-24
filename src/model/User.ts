import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
  name?: string;
  age?: number;
  id?: string;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();

  public sync: Sync<UserProps> = new Sync(rootUrl);

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(newData: UserProps) {
    Object.assign(this.data, newData);
  }
}
