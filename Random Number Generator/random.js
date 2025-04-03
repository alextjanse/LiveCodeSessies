/**
 * Get a random number that is greater or equal to 0 and less than 1.
 */
function getRandomNumber()
{
    return Math.random();
}

function testRandomDistribution()
{
    const percentiles = new Array(100).fill(0);

    const picks = 10000;

    for (let i = 0; i < picks; i++)
    {
        const number = Math.floor(getRandomNumber() * 100);

        percentiles[number]++;
    }

    for (let i = 0; i < 100; i++)
    {
        console.log(`percentile ${i + 1}: ${percentiles[i]}`);
    }
}

// testRandomDistribution();

/**
 * Get a random number between the lower- and upper bound.
 * @param {Number} lb Inclusive lower bound
 * @param {Number} ub Exclusive upper bound
 */
function getRandomNumber(lb = 0, ub = 1)
{
    return lb + (ub - lb) * Math.random();
}

/**
 * Return a random boolean value.
 * @param {Number} probTrue The probability that the function returns true
 */
function getRandomBool(probTrue = 0.5)
{
    return Math.random() < probTrue;
}

/**
 * Get a random integer between the lower- and upper bound.
 * @param {Number} lb Inclusive lower bound
 * @param {Number} ub Exclusive upper bound
 */
function getRandomInt(lb = 0, ub = 1)
{
    return Math.floor(lb + (ub - lb) * Math.random())
}

/**
 * Get a random string of a given length.
 * @param {Number} length The length of the string
 */
function getRandomString(length)
{
    let result = '';

    for (let i = 0; i < length; i++)
    {
        const ascii = getRandomInt(33, 122 + 1) // ASCII-value of ! to z (+ 1)

        const char = String.fromCharCode(ascii);

        result += char;
    }

    return result;
}

//  console.log(getRandomString(100));

/**
 * Pick a random item from a list.
 * @param {any[]} list The list of items.
 */
function getRandomPick(list)
{
    const index = getRandomInt(0, list.length);

    return list[index];
}

/**
 * Pick a random card from a standard deck of cards with jokers.
 * @returns A string, formatted as follows: {card} of {suit}
 */
function pickRandomCard()
{
    // 2 out of 54 cards are a joker
    if (getRandomBool(2 / 54))
    {
        return 'Joker';
    }

    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['Hearts', 'Spades', 'Diamonds', 'Clovers'];

    const card = getRandomPick(cards);
    const suit = getRandomPick(suits);

    return `${card} of ${suit}`;
}

const deck = [];

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['Hearts', 'Spades', 'Diamonds', 'Clovers'];

cards.forEach(card => {
    suits.forEach(suit => {
        deck.push(`${card} of ${suit}`);
    })
})

for (let i = 0; i < 2; i++) {
    deck.push('Joker');
}

/**
 * 
 * @param {string[]} deck 
 */
function popRandomCard(deck) {
    const index = getRandomInt(0, deck.length);

    const card = deck[index];

    deck.splice(index, 1);

    return card;
}

console.log(popRandomCard(deck));

console.log(deck);