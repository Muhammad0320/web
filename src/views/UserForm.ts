import { User } from "../model/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  template(): string {
    return `
                <div> 
                    <h1> User Form </h1> 
                    <div>  User Name: ${this.model.get("name")}  </div>
                    <div>  User age: ${this.model.get("age")}  </div>
                    <input />
                    <button> Click me abeg </button>
              </div>
        `;
  }

  onButtonClick(): void {
    console.log("Hello world");
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
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
    const templateElemnt = document.createElement("template");

    templateElemnt.innerHTML = this.template();

    this.buildEvents(templateElemnt.content);

    this.parent.appendChild(templateElemnt.content);
  }
}

// Muhammawwal@005
