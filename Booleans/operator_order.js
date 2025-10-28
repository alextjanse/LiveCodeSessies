/* 
Check the order of the operators by evaluating for all a,b,c
and checking whether the first or second placement of brackets
results in the same output as leaving out the brackets.
*/

for (let i = 0; i < 2; i++) {
    const a = i == 0;
    for (let j = 0; j < 2; j++) {
        const b = j == 0;
        for (let k = 0; k < 2; k++) {
            const c = k == 0;
            console.log(`a=${a ? 'T' : 'F'}`, `b=${b ? 'T' : 'F'}`, `c=${a ? 'T' : 'F'}`);
            console.log('a || b && c', a || b && c);
            console.log('(a || b) && c', (a || b) && c);
            console.log('a || (b && c)', a || (b && c));

            console.log('!a && b', !a && b);
            console.log('(!a) && b', (!a) && b);
            console.log('!(a && b)', !(a && b));
        }
    }
}