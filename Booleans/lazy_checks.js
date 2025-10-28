const l = null;

if (l && l.value == 1) {
    console.log('not-null check first');
}

if (l.value == 1 && l) {
    console.log('crash: l.value undefined')
}