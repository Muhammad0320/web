interface UserProps {
  name: string;
  age: number;
}

type UserReturn = number | string;

export class User {
  constructor(private data: UserProps) {}

  get(propName: "name" | "age"): UserReturn {
    return this.data[propName];
  }
}
