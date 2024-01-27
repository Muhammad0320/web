import { User, UserProps } from "../model/User";
import { Views } from "./Views";

export class UserForm extends Views<User, UserProps> {
  template(): string {
    return `
                <div> 

                    <input placeholder="${this.model.get("name")}" />
                    <button class='set-name' > Change Name </button>
                    <button class='set-age' > Set Random Age </button>
              </div>
        `;
  }

  onSetAge = (): void => {
    this.model.setRandomAge();
  };

  onSaveInput = (): void => {
    this.model.save();
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAge,
      "click:.set-name": this.onSetName,
      "click:set-save": this.onSetAge,
    };
  }

  onSetName = (): void => {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };
}

// Muhammawwal@005
