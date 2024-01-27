import { User, UserProps } from "../model/User";
import { Views } from "./Views";

export class UserEdits extends Views<User, UserProps> {
  template(): string {
    return `
                        <div> 

                                <div class='user-show' >  </div>
                                <div class='user-form' >  </div>

                        </div>

                `;
  }
}
