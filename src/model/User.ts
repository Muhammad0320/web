import { Attributes } from "./Attributes";
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

  public attribute: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attribute = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attribute.get;
  }
}
