import { toRoman } from '@/lib/roman';

describe('Roman numeral conversion', () => {
  test('converts basic numbers', () => {
    expect(toRoman(1)).toBe('I');
    expect(toRoman(5)).toBe('V');
    expect(toRoman(10)).toBe('X');
    expect(toRoman(50)).toBe('L');
    expect(toRoman(100)).toBe('C');
    expect(toRoman(500)).toBe('D');
    expect(toRoman(1000)).toBe('M');
  });

  test('converts complex numbers', () => {
    expect(toRoman(4)).toBe('IV');
    expect(toRoman(9)).toBe('IX');
    expect(toRoman(42)).toBe('XLII');
    expect(toRoman(99)).toBe('XCIX');
    expect(toRoman(2023)).toBe('MMXXIII');
  });

  test('throws error for numbers out of range', () => {
    expect(() => toRoman(0)).toThrow('Number too small');
    expect(() => toRoman(4000)).toThrow('Number too large');
    expect(() => toRoman(1.5)).toThrow('Must be a whole number');
  });
});