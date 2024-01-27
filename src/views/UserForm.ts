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

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log("Hello world");
  }

  render(): void {
    const templateElemnt = document.createElement("template");

    templateElemnt.innerHTML = this.template();

    console.log(templateElemnt);

    this.parent.appendChild(templateElemnt.content);
  }
}

// Muhammawwal@005
