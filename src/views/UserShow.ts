import { User, UserProps } from "../model/User";
import { Views } from "./Views";

export class UserShow extends Views<User, UserProps> {
  template(): string {
    return `
        
        <h1> User Details </h1> 
        <div>  User Name: ${this.model.get("name")}  </div>
        <div>  User age: ${this.model.get("age")}  </div>



            `;
  }
}
