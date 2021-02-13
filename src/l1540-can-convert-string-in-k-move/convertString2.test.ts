const convertString2 = require("./convertString2")

describe('convertString2', () => {

    describe('single character', () => {

        [
            ['a', 'a', 1, true],
            ['a', 'b', 1, true],
            ['a', 'c', 1, false],
            ['a', 'c', 2, true],
            ['a', 'd', 2, false],
            ['a', 'd', 2, false],
            ['b', 'a', 1, false],
            ['b', 'a', 25, true],
            ['z', 'a', 1, true],
        ].forEach(input => {
            const [s, t, k, expectedResult] = input
            it(`should return ${expectedResult} when given ${s} ${t} ${k}`, () => {
                const result = convertString2.canConvertString2(s, t, k)
                expect(result).toBe(expectedResult)
            })
        })
    });
})