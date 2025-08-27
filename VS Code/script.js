function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Set a breakpoint here
    }
    return sum;
}

function main() {
    const numbers = [2, 4, 6, 8, 10];
    let result = calculateSum(numbers); // Step into this call
    console.log("The sum is:", result); // Watch 'result'
}

main();
