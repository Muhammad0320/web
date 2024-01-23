interface UserProps {
  name?: string;
  age?: number;
}

type UserReturn = number | string;

type Callback = () => void;

export class User {
  events: { [eventName: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: "name" | "age"): UserReturn {
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
}
