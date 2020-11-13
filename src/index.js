// need webpack to do this -- normally node only uses require  fs is filesystem
import fs from "fs";

// don't really use timeout irl; usually use promise instead
setTimeout(() => {
  console.log("hi");
}, 4000);
// node callbacks need to be set up with err first THEN results
//  basically an event listener
fs.readFile(
  __filename,
  "utf8",
  (err, results) => {
    if (err) {
      console.error(err);
    } else {
      // TODO: Add some content to file
      // Write the file to new directory
      // Create a directory
      console.log(results);
    }
  },
  4000
);
