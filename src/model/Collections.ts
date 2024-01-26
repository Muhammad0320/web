import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collections<T, K> {
  models: T[] = [];

  events: Eventing = new Eventing();

  constructor(public rootUrl: string, private deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  async fetch() {
    const res: AxiosResponse = await axios.get(this.rootUrl);

    res.data.forEach((data: K) => {
      this.models.push(this.deserialize(data));
    });
    this.trigger("change");
  }
}
