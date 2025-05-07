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
        console.log("Step 1:", msg);
        return wait(500);
    })
    .then(msg => {
        console.log("Step 2:", msg);
        return wait(700, true); // ⛔️ hier gaat het fout
    })
    .then(msg => {
        console.log("Step 3 (wordt niet bereikt):", msg);
        return wait(300);
    })
    .catch(err => {
        console.error("Er is iets misgegaan:", err); // ✅ deze vangt de fout van regel hierboven
        return wait(400); // herstelactie
    })
    .then(msg => {
        console.log("Step 4 na error recovery:", msg);
        return Promise.reject("Nog een foutje"); // ⛔️ opnieuw fout
    })
    .catch(err => {
        console.error("Opnieuw fout:", err); // ✅ deze vangt de tweede fout op
    })
    .finally(() => {
        console.log("Klaar met alles, goed of fout."); // ✅ altijd uitgevoerd
    });