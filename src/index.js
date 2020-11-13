import https from "https";

// straight from the documentation
const req = https.request(
  {
    hostname: "google.com",
    port: 443,
    method: "GET",
    path: "/",
  },

  (res) => {
    res.on("data", (data) => {
      process.stdout.write(data);
    });

    res.on("error", (error) => {
      console.error(error);
    });
  }
);

req.end();
