import axios, { AxiosPromise, AxiosResponse } from "axios";
import { UserProps } from "./User";

export class Sync {
  constructor(public rootUrl: string) {}

  async fetch(id: string): AxiosPromise {
    const res: AxiosResponse = await axios.get(`${this.rootUrl}/${id}`);

    return res.data;
  }

  save(user: UserProps): AxiosPromise {
    const { id } = user;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, user);
    } else {
      return axios.post(`${this.rootUrl}`, user);
    }
  }
}
