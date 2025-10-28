let l = { value: 1 };
l = null; // (un)-comment to see difference

// Nested
if (l) {
    console.log('l is not null');
    if (l.value === 1) {
        console.log('value is 1');
    }
}

// Left side is evaluated first, right side only when necessary
if (l && l.value === 1) {
    console.log('l is not null, value is 1');
}
try {
    // Left side is evaluated first, crashes if undefined
    if (l.value === 1 && l) {
        console.log('crash: l.value undefined')
    }
} catch(e) {
    console.error(e);
}