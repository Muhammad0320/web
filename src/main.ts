import { Collections } from "./model/Collections";

const collection = new Collections("http://localhost:3000/users");

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
