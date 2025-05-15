import { berekenVerzendkosten } from './verzendkosten.js';

describe('berekenVerzendkosten', () => {
  it('geeft gratis verzending in NL bij >= €50', () => {
    expect(berekenVerzendkosten(50, 'NL')).toBe(0);
  });

  it('geeft €4 verzending in NL onder €50', () => {
    expect(berekenVerzendkosten(30, 'NL')).toBe(4);
  });

  it('geeft altijd €5 voor BE', () => {
    expect(berekenVerzendkosten(100, 'BE')).toBe(5);
  });

  it('geeft altijd €10 voor OTHER', () => {
    expect(berekenVerzendkosten(100, 'OTHER')).toBe(10);
  });

  it('premium klanten betalen nooit verzendkosten', () => {
    expect(berekenVerzendkosten(10, 'BE', true)).toBe(0);
    expect(berekenVerzendkosten(10, 'NL', true)).toBe(0);
    expect(berekenVerzendkosten(10, 'OTHER', true)).toBe(0);
  });

  it('gooit error bij negatief bedrag', () => {
    expect(() => berekenVerzendkosten(-5, 'NL')).toThrow();
  });

  it('gooit error bij onbekend land', () => {
    expect(() => berekenVerzendkosten(10, 'FR')).toThrow();
  });
});
