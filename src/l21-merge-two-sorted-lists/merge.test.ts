import { mergeTwoArrays } from "./merge";

describe('mergeTwoLists', () => {
    const testcases: {
        l1: number[],
        l2: number[],
        merged: number[]
    }[] = [
            { l1: [], l2: [], merged: [] },
            { l1: [1], l2: [], merged: [1] },
            { l1: [2], l2: [], merged: [2] },
            { l1: [1, 2], l2: [], merged: [1, 2] },
            { l1: [], l2: [1], merged: [1] },
            { l1: [1], l2: [2], merged: [1, 2] },
            { l1: [2], l2: [1], merged: [1, 2] },
            { l1: [1], l2: [3], merged: [1, 3] },
            { l1: [1, 2], l2: [3], merged: [1, 2, 3] },
        ];
    testcases.forEach(({ l1, l2, merged }) => {
        it(`should return ${merged} when given ${l1} and ${l2}`, () => {
            const result = mergeTwoArrays(l1, l2)
            expect(result).toMatchObject(merged)
        });
    })
});