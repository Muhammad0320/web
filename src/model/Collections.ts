import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";

export class Collections {
  models: User[] = [];

  events: Eventing;

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  async fetch() {
    const res: AxiosResponse = await axios.get(this.rootUrl);

    res.data.forEach((data: UserProps) => {
      const user = User.buildUser(data);

      this.models.push(user);

      this.trigger("change");
    });
  }
}
