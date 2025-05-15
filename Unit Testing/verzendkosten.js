/**
 * Bereken de verzendkosten op basis van het totaalbedrag, land en premium status.
 * Verzendkosten zijn
 * @param {number} totaalbedrag Het totaalbedrag van de bestelling. Moet positief zijn.
 * @param {string} land Landcode (bijv. 'NL', 'BE', 'OTHER'). Alleen deze drie zijn geldig.
 * @param {boolean} isPremium Of de klant premium is. Standaard is false.
 * @throws {Error} Ongeldige invoer
 * @returns {number} Verzendkosten
 */
export function berekenVerzendkosten(totaalbedrag, land, isPremium = false) {
    if (totaalbedrag < 0) throw new Error("Negatief bedrag");
    if (!['NL', 'BE', 'OTHER'].includes(land)) throw new Error("Onbekend land");
  
    if (isPremium) return 0;
  
    if (land === 'NL') {
      return totaalbedrag >= 50 ? 0 : 4;
    }
  
    if (land === 'BE') {
      return 5;
    }
  
    return 10; // OTHER
  }
  