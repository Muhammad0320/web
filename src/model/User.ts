import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Model } from "./Model";
import { Collections } from "./Collections";

export interface UserProps {
  name?: string;
  age?: number;
  id?: string;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(rootUrl),
      new Eventing()
    );
  }

  static buildUserCollection(): Collections<User, UserProps> {
    return new Collections<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge() {
    const age = Math.round(Math.random() * 100);

    this.set({ age });
  }
}
