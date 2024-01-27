import { HasId, Model } from "../model/Model";

export abstract class Views<T extends Model<K>, K extends HasId> {
  abstract template(): string;

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  regions: { [key: string]: Element };

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  mapRegions(fragments: DocumentFragment): void {
    const regionsMaps = this.regionsMap();

    for (let key in regionsMaps) {
      const selector = regionsMaps[key];

      const element = fragments.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  buildEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = " ";

    const templateElemnt = document.createElement("template");

    templateElemnt.innerHTML = this.template();

    this.buildEvents(templateElemnt.content);

    this.parent.appendChild(templateElemnt.content);
  }
}
