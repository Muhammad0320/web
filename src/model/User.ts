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

  on(eventName: string, callback: Callback) {}
}
