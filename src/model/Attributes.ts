export class Attributes<T extends Object> {
  constructor(private data: T) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(newData: T) {
    Object.assign(this.data, newData);
  }
}
