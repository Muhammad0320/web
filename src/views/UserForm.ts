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

  render(): void {
    const templateElemnt = document.createElement("template");

    templateElemnt.innerHTML = this.template();

    this.parent.appendChild(templateElemnt.content);
  }
}
