import { promises as fs } from "fs";
import got from "got";

(async () => {
  try {
    const filmsRes = await got("https://ghibliapi.herokuapp.com/films").json();

    fs.writeFile("test.txt", filmsRes.toString())
      .then(() => {
        console.log("fin!");
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
})();

got("https://ghibliapi.herokuapp.com/films")
  .json()
  .then((results) => {
    fs.writeFile("then.txt", results.toString());
  })
  .then(() => {
    console.log("finished with then");
  })

  // catch will catch any error that occurs anywhere in the then chain
  .catch((err) => {
    console.error(err);
  });
