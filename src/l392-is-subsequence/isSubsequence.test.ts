import { isSubsequence } from "./isSubsequence";

describe('isSubsequence', () => {
    [
        { s: '', t: '', expectedResult: true },
        { s: 'a', t: 'a', expectedResult: true },
        { s: 'a', t: 'ab', expectedResult: true },
        { s: 'a', t: 'ab', expectedResult: true },
        { s: 'c', t: 'ab', expectedResult: false },
        { s: 'abc', t: 'ab', expectedResult: false },
        { s: 'abc', t: 'a', expectedResult: false },
        { s: 'abc', t: 'abhgdc', expectedResult: true },
        { s: 'axc', t: 'ahbgdc', expectedResult: false },
    ].forEach(({s, t, expectedResult}) => {
        it(`should return ${expectedResult} if s = ${s}, t = ${t}`, () => {
            const result = isSubsequence(s, t)
            expect(result).toBe(expectedResult)
        });
    })
});