// need to destructure promises
// renaming using as keyword
import { promises as fs } from "fs";

fs.readFile(__filename)
  .then((fileContents) => {
    fs.writeFile("test.txt", fileContents);
  })
  .then(() => {
    console.log("file written");
  })
  .catch((err) => {
    console.log(err);
  });
