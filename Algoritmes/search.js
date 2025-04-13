function getRandomList(length = 100) {
    const items = [];
    
    for (let i = 0; i < length; i++) {
        items.push(Math.floor(Math.random() * length));
    }

    return items;
}

const list = getRandomList();

const queryItem = list[list.length * Math.floor(Math.random())];

function linearSearch(items, queryItem) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === queryItem) return true;
    }

    return false;
}

function binarySearch(items, queryItem, lb = 0, ub = items.length) {
    if (items.length === 0) return false;

    const m = Math.floor((lb + ub) / 2)
    const median = items[m];
    
    if (queryItem === median) return true;
    if (queryItem < median) return binarySearch(items, queryItem, lb, m);
    if (queryItem > median) return binarySearch(items, queryItem, m, ub);
}

list.sort();
console.log(binarySearch(list, queryItem));