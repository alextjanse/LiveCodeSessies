
function* parseNumbers(text) {
  const words = text.split(' ');
  let counter = 0;
  for (const word of words) {
    if (!isNaN(word)) {
      yield parseInt(word);
      counter += 1;
    }
  }
  return counter;
}

const txt = 'Ik heb 3 bananen bij mijn 5 appels gelegd'
const gen = parseNumbers(txt);
let result;

while (!(result = gen.next()).done) {
  console.log(`New number: ${result.value}`);
}

console.log(`Done: ${result.value} words were found`);
