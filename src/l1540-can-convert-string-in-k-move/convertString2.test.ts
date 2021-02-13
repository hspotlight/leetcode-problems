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
    })
    describe('multiple char (same length)', () => {

        [
            // only one change
            ['ab', 'aa', 2, false],
            ['ab', 'aa', 25, true],
            // diff change under k
            ['ab', 'd', 2, false],
            ['ab', 'bd', 2, true],
            ['ab', 'bc', 2, false],
            ['ab', 'bc', 27, true],
            ['abc', 'bcd', 53, true],
            ['input', 'ouput', 9, true],
            ['abc', 'bcd', 10, false],
            ['mpzzwh', 'kaeblv', 24, true],
            ['qsxkjbfz', 'xyfirptk', 73, true],
        ].forEach(input => {
            const [s, t, k, expectedResult] = input
            it(`should return ${expectedResult} when given ${s} ${t} ${k}`, () => {
                const result = convertString2.canConvertString2(s, t, k)
                expect(result).toBe(expectedResult)
            })
        })
    })
})