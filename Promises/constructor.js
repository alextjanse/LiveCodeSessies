// Promise constructor
let promise = new Promise((resolve, reject) => {
    // async task
    let result = 'some result';
    let success = true;

    if (success) {
        resolve(result);
    } else {
        result = 'failed :(';
        reject(result);
    }
});

async function func() {
    let result = 'some result';
    let success = true;

    if (success)
        return result; // Converts to Promise.resolve(result)
    throw result; // Converts to Promise.reject(result);
}

// Example
function wait(ms, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) reject(`Failed after ${ms}ms`);
            else resolve(`Resolved after ${ms}ms`);
        }, ms);
    });
}

wait(1000)
    .then(msg => {
        console.log(msg);
        return wait(500);
    })
    .then(msg => console.log("Done again!"))
    .catch(err => console.error(err));

// Resolve & Reject
// Promise.resolve('success!'); // A promise that instantly resolves
// Promise.reject('fail'); // A promise that instantly rejects