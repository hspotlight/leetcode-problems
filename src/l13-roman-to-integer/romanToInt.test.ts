import { romanToInt } from "./romanToInt";

describe('romanToInt', () => {
    [
        { roman: 'I', int: 1 },
        { roman: 'II', int: 2 },
        { roman: 'III', int: 3 },
        { roman: 'V', int: 5 },
        { roman: 'VI', int: 6 },
        { roman: 'VII', int: 7 },
        { roman: 'VIII', int: 8 },
        { roman: 'X', int: 10 },
        { roman: 'XI', int: 11 },
        { roman: 'XII', int: 12 },
        { roman: 'XIII', int: 13 },
        { roman: 'L', int: 50 },
        { roman: 'LXVIII', int: 68 },
        { roman: 'C', int: 100 },
        { roman: 'D', int: 500 },
        { roman: 'M', int: 1000 },
        
        { roman: 'IV', int: 4 },
        { roman: 'IX', int: 9 },
        { roman: 'XIV', int: 14 },
        { roman: 'XIX', int: 19 },
        { roman: 'XXIX', int: 29 },
        { roman: 'XL', int: 40 },
        { roman: 'XC', int: 90 },
        { roman: 'CD', int: 400 },
        { roman: 'CM', int: 900 },
    ].forEach(({ roman, int }) => {
        it(`should return ${int} when given ${roman}`, () => {
            const result = romanToInt(roman)
            expect(result).toBe(int)
        })
    })
});