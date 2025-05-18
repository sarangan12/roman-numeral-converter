const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const SYMBOLS = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

export function toRoman(num: number): string {
    if (num < 1) throw new Error("Number too small (min 1)");
    if (num > 3999) throw new Error("Number too large (max 3999)");
    if (!Number.isInteger(num)) throw new Error("Must be a whole number");

    let result = '';
    
    for (let i = 0; i < VALUES.length; i++) {
        while (num >= VALUES[i]) {
            result += SYMBOLS[i];
            num -= VALUES[i];
        }
    }
    
    return result;
}