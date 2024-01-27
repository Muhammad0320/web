import { User } from "../model/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  template(): string {
    return `
                <div> 
                    <h1> User Form </h1> 
                    <div>  User Name: ${this.model.get("name")}  </div>
                    <div>  User age: ${this.model.get("age")}  </div>
                    <input />
                    <button> Change Name </button>
                    <button class='set-age' > Set Random Age </button>
              </div>
        `;
  }

  onSetAge = (): void => {
    this.model.setRandomAge();
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAge,
    };
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

// Muhammawwal@005
