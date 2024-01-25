import axios, { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
  id?: string;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  async fetch(id: string): AxiosPromise {
    const res: AxiosResponse = await axios.get(`${this.rootUrl}/${id}`);

    return res.data;
  }

  save(user: T): AxiosPromise {
    const { id } = user;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, user);
    } else {
      return axios.post(`${this.rootUrl}`, user);
    }
  }
}
