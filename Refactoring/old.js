// shopping.js

// Deze functie doet eigenlijk alles tegelijk...
function processCart(items, taxRate, discountCode) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        let price = items[i].price;
        if (items[i].category === "food") {
            price = price * 0.9; // korting eten
        }
        if (items[i].category === "electronics") {
            if (items[i].warranty === true) {
                price = price + 50;
            }
        }
        total += price;
    }

    if (discountCode) {
        if (discountCode === "SUMMER10") {
            total = total * 0.9;
        }
        if (discountCode === "VIP") {
            total = total * 0.8;
        }
    }

    // BTW berekening
    total = total + (total * taxRate);

    console.log("Het totaal van je winkelwagen is: " + total + " euro");
    return total;
}

// test
processCart(
    [
        { name: "Brood", price: 3, category: "food" },
        { name: "TV", price: 499, category: "electronics", warranty: true }
    ],
    0.21,
    "VIP"
);
