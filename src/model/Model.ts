import { AxiosPromise } from "axios";
import { Callback, Eventing } from "./Eventing";

interface ModelAtributes<T> {
  getAll(): T;

  set(newData: T): void;

  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: string): AxiosPromise;

  save(user: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;

  trigger(eventName: string): void;
}

interface HasId {
  id?: string;
}

export class Model<T extends HasId> {
  constructor(
    public attribute: ModelAtributes<T>,
    public sync: Sync<T>,
    public events: Events
  ) {}

  on = this.events.on;

  trigger = this.events.trigger;

  get = this.attribute.get;

  set(data: T) {
    this.attribute.set(data);

    this.trigger("change");
  }

  async fetch() {
    const id = this.get("id");

    if (!id) {
      throw new Error(" There is no user with this id  ");
    }

    const data = await this.sync.fetch(id);

    console.log(data.data);

    console.log(data);

    // this.set(data.data);
  }

  async save() {
    console.log(this.attribute.getAll());

    await this.sync.save(this.attribute.getAll());

    this.trigger("save");
  }
}
