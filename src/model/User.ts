import axios, { AxiosResponse } from "axios";

interface UserProps {
  name?: string;
  age?: number;
  id?: string;
}

type UserReturn = number | string;

type Callback = () => void;

export class User {
  events: { [eventName: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: "name" | "age" | "id"): UserReturn {
    return this.data[propName]!;
  }

  set(newData: UserProps) {
    Object.assign(this.data, newData);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];

    handlers.push(callback);

    this.events[eventName] = handlers;
  }

  trigger(eventName: string) {
    const handlers = this.events[eventName];

    if (!handlers || !handlers.length) {
      return;
    }

    handlers.forEach((callback) => callback());
  }

  async fetch() {
    const res: AxiosResponse = await axios.get(
      `http://localhost:3000/users/${this.get("id")}`
    );

    this.set(res.data);
  }

  save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
