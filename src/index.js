// own version of built in callback could do aSetTimeout
// more accurate name would be setTimeoutPromise
// this is a function factory pattern
const setTimeoutAsync = (fxn, delay) =>
  new Promise((resolve) => {
    // this behaves like a 'return' the 'reject' is never triggered
    setTimeout(() => {
      resolve(fxn());
    }, delay);
  });

// need to understand this part -- use .then to get to results; .catch to grab errors and can use .finally
setTimeoutAsync(() => {
  return "hi";
}, 2000)
  .then((results) => {
    console.log(results, "done from promise!");
  })
  .catch((error) => {
    console.error("fake error", error);
  })
  .finally(() => {
    console.log("no matter what we are done!");
  });
