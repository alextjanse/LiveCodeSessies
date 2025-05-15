/**
 * Bereken de korting op een prijs. Als de kortingscode 'SUMMER2025' is, wordt er €5 extra korting gegeven.
 * @param {number} prijs Prijs van het product. Prijs is altijd positief.
 * @param {number} percentage Kortingspercentage. Moet tussen 0 en 100 liggen.
 * @param {string | null} kortingscode Kortingscode (optioneel)
 * @returns {number} Eindprijs na korting
 * @throws {Error} Ongeldige invoer
 */
export function berekenKorting(prijs, percentage, kortingscode = null) {
    if (prijs < 0 || percentage < 0 || percentage > 100) {
        throw new Error("Ongeldige invoer");
    }
    
    let eindPrijs = prijs * (1 - percentage / 100);
    
    if (kortingscode === 'SUMMER2025') {
        eindPrijs -= 5;
    }
    
    if (eindPrijs < 0) eindPrijs = 0;
    
    return Math.round(eindPrijs * 100) / 100;
}




















/*
if (prijs < 0 || percentage < 0 || percentage > 100) {
    throw new Error("Ongeldige invoer");
}

let eindPrijs = prijs * (1 - percentage / 100);

if (kortingscode === 'SUMMER2025') {
    eindPrijs -= 5;
}

if (eindPrijs < 0) eindPrijs = 0;

return Math.round(eindPrijs * 100) / 100;
*/