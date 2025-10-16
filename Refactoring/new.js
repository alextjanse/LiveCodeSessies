/*
The following comments are JSDoc comments. The type definition is a bit overkill,
but it is good practice to start each function with a description.
*/

/**
 * @typedef Item test 
 * @prop {number} price price of the item
 * @prop {string} category category of the item
 * @prop {boolean} warranty whether there is a warranty on the item
 */

/**
 * Calculate the total price of the items in the cart.
 * @param {Item[]} items The items in the cart
 * @param {number} taxRate The tax rate
 * @param {number | null} discountCode The discount code
 * @returns {number} The total price of the cart
 */
function processCart(items, taxRate, discountCode) {
    let total = 0;
    
    // Process all items in the cart (write a comment before each for-loop)
    for (let i = 0; i < items.length; i++) {
        total += processItem(items[i]);
    }

    total = applyDiscount(total, discountCode);
    
    // Apply taxes
    total *= 1 + taxRate;

    console.log("Het totaal van je winkelwagen is: " + total + " euro");
    return total;
}

/**
 * Process the item and determine the price with possible discount and warranty.
 * @param {Item} item Item to be processed
 * @returns {number} Price of the item
 */
function processItem(item) {
    const { price, category, warranty } = item;

    let result = price;

    // Give discount on food items
    if (category === "food") {
        result *= 0.9;
    }
    else if (category === "electronics" && warranty) {
        result += 50;
    }
    return result;
}

// Store valid discount codes in a Map, so new ones can be added easily
const validCodes = new Map();
validCodes.set("SUMMER10", 0.9);
validCodes.set("VIP", 0.8);

/**
 * Check whether the discount code is valid and apply the discount accordingly.
 * @param {number} price The total price before applying the discount.
 * @param {string} discountCode The discount code
 * @returns {number} The total price after applying the discount
 */
function applyDiscount(price, discountCode) {
    if (discountCode) {
        if (validCodes.has(discountCode)) {
            price *= validCodes.get(discountCode);
        }
    }

    return price;
}

processCart(
    [
        { name: "Brood", price: 3, category: "food" },
        { name: "TV", price: 499, category: "electronics", warranty: true }
    ],
    0.21,
    "VIP"
);
