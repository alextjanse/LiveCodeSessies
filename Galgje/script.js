import { readFile } from 'fs/promises';
import readline from 'readline';

const stages = [
    ``,
    `



       ===`,
    `
        |
        |
        |
       ===`,
    `    +---+
        |
        |
        |
       ===`,
    `    +---+
    O   |
        |
        |
       ===`,
    `    +---+
    O   |
    |   |
        |
       ===`,
    `    +---+
    O   |
   /|   |
        |
       ===`,
    `    +---+
    O   |
   /|\\  |
        |
       ===`,
    `    +---+
    O   |
   /|\\  |
   /    |
       ===`,
    `    +---+
    O   |
   /|\\  |
   / \\  |
       ===`
  ];

async function getWord() {
    try {
        const data = await readFile('woordenlijst.txt', 'utf8');
        const words = data.split('\n');
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
}


const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function getInput(wordLength) {
    let guess = await new Promise(resolve => io.question('Guess a single letter or the entire word: ', ans => resolve(ans)));
    
    while (!(guess.length == 1 || guess.length == wordLength)) {
        console.log('Incorrect input.');
        guess = await new Promise(resolve => io.question('Guess a single letter or the entire word: ', ans => resolve(ans)));
    }

    return guess;
}

function correctGuess(word, guess) {
    return word.includes(guess);
}

function showWord(word, guesses) {
    return word
        .split('')
        .map(letter => (guesses.includes(letter) ? letter : '_'))
        .join(' ');
}

async function main() {
    const word = await getWord();

    let currentStage = 0;

    const guesses = [];

    while (currentStage < stages.length) {
        console.log(showWord(word, guesses));

        const guess = await getInput(word.length);
        
        if (guess.length === 1) {
            guesses.push(guess);
            if (!correctGuess(word, guess)) {
                currentStage += 1;
            }
        } else {
            if (guess === word) {
                console.log('You win!');
                process.exit(0);
            } else {
                currentStage += 3;
            }
        }

        console.log(stages[Math.min(currentStage, stages.length - 1)]);
    }

    console.log('You lose!');

    io.close();
}

main();