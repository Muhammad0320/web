export type Callback = () => void;

export class Eventing {
  events: { [eventName: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];

    handlers.push(callback);

    this.events[eventName] = handlers;
  };

  trigger = (eventName: string) => {
    const handlers = this.events[eventName];

    if (!handlers || !handlers.length) {
      return;
    }

    handlers.forEach((callback) => callback());
  };
}
