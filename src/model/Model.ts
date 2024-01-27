import { AxiosPromise } from "axios";
import { Callback } from "./Eventing";

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

export interface HasId {
  id?: string;
}

export class Model<T extends HasId> {
  constructor(
    private attribute: ModelAtributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  trigger = this.events.trigger;

  on = this.events.on;

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

    const data = (await this.sync.fetch(id)) as unknown;

    this.set(data as T);
  }

  async save() {
    console.log(this.attribute.getAll());

    await this.sync.save(this.attribute.getAll());

    this.trigger("save");
  }
}
