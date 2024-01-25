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

class Model {}
