class USerForm {
  constructor(public parent: Element) {}

  template(): string {
    return `

                <div> 
                    <h1> User Form </h1> 
                    
                    <input />
              </div>

        `;
  }

  render() {
    const templateElemnt = document.createElement("template");

    this.parent.appendChild(templateElemnt.content);
  }
}
