import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

interface UserProps {
  name?: string;
  age?: number;
  id?: string;
}

type UserReturn = number | string;

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: "name" | "age" | "id"): UserReturn {
    return this.data[propName]!;
  }

  set(newData: UserProps) {
    Object.assign(this.data, newData);
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
