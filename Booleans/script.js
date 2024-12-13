/*
Een warm land voldoet aan de volgende criteria:

    De gemiddelde temperatuur was afgelopen jaar meer dan 20 graden
    De totale neerslag was afgelopen jaar minder dan 750 millimeter

Een land is ook een warm land als het niet voldoet aan minstens één van de volgende criteria:

    De laagste temperatuur was afgelopen jaar onder 10 graden
    De gemiddelde temperatuur is minder dan 25 graden
*/

const gemTemp = process.argv[2];
const neerslag = process.argv[3];
const laagTemp = process.argv[4];

const isWarmLand = (gemTemp > 20 && neerslag < 750) ||
    !(laagTemp < 10 && gemTemp < 25);

console.log(`Het land is warm: ${isWarmLand}`);
