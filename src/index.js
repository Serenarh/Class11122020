import got from "got";

got("https://www.cnn.com")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err.message);
  })
  .finally(() => {
    console.info("Class is over!");
  });
