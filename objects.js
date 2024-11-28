const Alex = 
{
    naam: 'Alex',
    achternaam: 'Janse',
    woonplaats: 'Utrecht',
    geboortedatum: new Date("10-16-1997"),
    favoriete_kleur: 'blauw',
    // huisdier: 'Bobbie',
};

const Blex = { ...Alex, geslacht: 'man', woonplaats: 'Groningen' };

Blex.woonplaats = 'Amsterdam';

function groetPersoon(persoon)
{
    const { naam, achternaam } = persoon;

    console.log(`Welkom, ${naam} ${achternaam}!`);
}

function checkHuisdier(persoon)
{
    const { naam, huisdier } = persoon;

    if (!huisdier)
    {
        console.log(`${naam} heeft geen huisdier.`);
    }
    else
    {
        console.log(`${naam} heeft een huisdier genaamd ${huisdier}`);
    }
}

function pasFavorieteKleurAan(persoon)
{
    const { naam, favoriete_kleur: oudeKleur } = persoon;
    
    console.log(`De favoriete kleur van ${naam} is ${oudeKleur}. Welke kleur moet het worden?`);
    
    const nieuweKleur = 'geel'; // TODO: vraag gebruiker om eigen input
    
    console.log(`De nieuwe favoriete kleur is ${nieuweKleur}`);
    
    persoon.favoriete_kleur = nieuweKleur;
}

// groetPersoon(Alex);

// checkHuisdier(Alex);

pasFavorieteKleurAan(Alex);

console.log(Alex);
