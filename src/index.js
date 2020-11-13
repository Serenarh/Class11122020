import https from "http";

const interval = setInterval(() => {
  console.log("hi");
}, 200);

setTimeout(() => {
  clearInterval(interval);
}, 2000);
