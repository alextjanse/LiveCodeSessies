/** @type {HTMLInputElement} */
const plaintextBox = document.getElementById('plaintext');
/** @type {HTMLInputElement} */
const cipherBox = document.getElementById('cipher');
/** @type {HTMLInputElement} */
const ciphertextBox = document.getElementById('ciphertext');
/** @type {HTMLButtonElement} */
const genCipherButton = document.getElementById('genCipher');
/** @type {HTMLFormElement} */
const encryptForm = document.getElementById('form');

/**
 * Return an array with the letters of the alphabet.
 * @returns {string[]}
 */
function getAlphabet() {
    return [...'abcdefghijklmnopqrstuvwxyz'];
}

function genCipher() {
    const newCipher = getAlphabet();

    for (let i = 0; i < newCipher.length; i++) {
        const j = Math.floor(Math.random() * newCipher.length);
        
        const t = newCipher[j];
        newCipher[j] = newCipher[i];
        newCipher[i] = t;
    }

    return newCipher.join('');
}

genCipherButton.addEventListener('click', (e) => {
    e.preventDefault();
    cipherBox.value = genCipher();
});

function encrypt() {
    const plaintext = plaintextBox.value.split('');
    const cipher = cipherBox.value;

    const alphabet = getAlphabet();
    const mapping = new Map(alphabet.map((c, i) => [c, cipher[i]]));

    const ciphertext = plaintext.map(c => mapping.get(c.toLowerCase()));

    ciphertextBox.value = ciphertext.join('');
}

function decrypt() {
    const ciphertext = ciphertextBox.value.split('');
    const cipher = cipherBox.value;

    const alphabet = getAlphabet();
    const mapping = new Map(alphabet.map((c, i) => [cipher[i], c]));

    const plaintext = ciphertext.map(c => mapping.get(c.toLowerCase()));

    plaintextBox.value = plaintext.join('');
}

encryptForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(encryptForm);
    if (formData.get('type') === 'Encrypt') {
        encrypt();
    } else {
        decrypt();
    }
});