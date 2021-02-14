import { numberOfSteps } from "./numberOfSteps";

describe('romanToInt', () => {
    [
        { num: 0, step: 0 },
        { num: 1, step: 1 },
        { num: 2, step: 2 },
        { num: 3, step: 3 },
        { num: 4, step: 3 },
        { num: 5, step: 4 },
        { num: 6, step: 4 },
        { num: 7, step: 5 },
        { num: 8, step: 4 },
        { num: 14, step: 6 },
    ].forEach(({ num, step }) => {
        it(`should return ${step} when given ${num}`, () => {
            const result = numberOfSteps(num)
            expect(result).toBe(step)
        })
    })
});