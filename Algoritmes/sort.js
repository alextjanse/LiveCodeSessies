function getRandomList(length = 100) {
    const items = [];
    
    for (let i = 0; i < length; i++) {
        items.push(Math.floor(Math.random() * length));
    }

    return items;
}

function bubbleSort(items) {
    const n = items.length;

    for (let i = 0; i < n; i++) { // O(n)
        for (let j = 0; j < n - i - 1; j++) { // O(n)
            if (items[j] > items[j + 1]) {
                [items[j], items[j + 1]] = [items[j + 1], items[j]];
            }
        }
    }

    return items;
}

const list1 = getRandomList();
console.log(bubbleSort(list1));

function quickSort(items) { // S(n)
    const n = items.length;

    if (n <= 1)
        return items;

    const pivot = Math.floor(Math.random() * n);

    let left = [];
    let right = [];

    for (let i = 0; i < n; i++) { // O(n)
        if (i === pivot) continue;

        if (items[i] <= items[pivot]) {
            left.push(items[i]);
        } else {
            right.push(items[i]);
        }
    }

    left = quickSort(left); // (n / 2) * S(n / 2)
    right = quickSort(right); // (n / 2) * S(n / 2)

    return [...left, items[pivot], ...right];
}

const list2 = getRandomList();
console.log(quickSort(list2));