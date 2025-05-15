import { berekenKorting } from './korting.js';

describe('berekenKorting', () => {
  it('berekent correcte korting zonder kortingscode', () => {
    expect(berekenKorting(100, 20)).toBe(80);
  });

  it('berekent correcte korting met kortingscode', () => {
    expect(berekenKorting(100, 20, 'SUMMER2025')).toBe(75);
  });

  it('prijs wordt nooit negatief', () => {
    expect(berekenKorting(3, 50, 'SUMMER2025')).toBe(0);
  });

  it('gooit error bij negatieve prijs', () => {
    expect(() => berekenKorting(-10, 10)).toThrow();
  });

  it('gooit error bij negatieve percentage', () => {
    expect(() => berekenKorting(100, -10)).toThrow();
  });

it('gooit error bij percentage boven 100', () => {
    expect(() => berekenKorting(100, 110)).toThrow();
});
});
