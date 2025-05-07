function wait(ms, result, shouldReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) reject(`${result} rejected after ${ms}ms`);
            else resolve(`${result} resolved after ${ms}ms`);
        }, ms);
    });
}

// All
await Promise.all([
    wait(1000, "A"),
    wait(500, "B"),
    wait(700, "C")
]).then(console.log).catch(console.error);

// All settled
await Promise.allSettled([
    wait(300, "X"),
    wait(500, "Y", true),
    wait(200, "Z")
]).then(console.log);

// Any
await Promise.any([
    wait(500, "Bad Server", true),
    wait(800, "Also Bad", true),
    wait(300, "Good Server")
]).then(console.log).catch(console.error);

// Race
const fetchMock = wait(1000, "Data");
const timeout = wait(300, "Timeout", true);

await Promise.race([fetchMock, timeout])
    .then(console.log)
    .catch(console.error);

// Try (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/try)

// Doesn't seem to work...
// Promise.try(() => {
//     if (Math.random() > 0.5) {
//         throw new Error("Oops! A sync error");
//     }
//     return "Success!";
// }).then(console.log).catch(console.error);

// With resolvers
const { promise, resolve, reject } = Promise.withResolvers();

setTimeout(() => {
    console.log("Resolving later...");
    resolve("Manually resolved!");
}, 1000);

await promise.then(console.log);
