import { Eventing } from "./Eventing";

export class collections {
  events: Eventing;

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}
