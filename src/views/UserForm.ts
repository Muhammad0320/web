export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
                <div> 
                    <h1> User Form </h1> 
                    <input />
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

    console.log(templateElemnt);

    this.parent.appendChild(templateElemnt.content);
  }
}

// Muhammawwal@005
