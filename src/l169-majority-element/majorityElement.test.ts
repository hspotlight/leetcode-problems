
import { majorityElement } from "./majorityElement";

// even case -> n/2 - (4,3) - (8,5)
// old case -> (5,3) - (6, 4)
describe('majorityElement', () => {
    it('should return 1 if input is [1]', () => {
        const result = majorityElement([1]);
        expect(result).toBe(1);
    });
    it('should return 2 if input is [2]', () => {
        const result = majorityElement([2]);
        expect(result).toBe(2);
    });
    it('should return 2 if input is [1,2,2]', () => {
        const result = majorityElement([1,2,2]);
        expect(result).toBe(2);
    });
    it('should return 3 if input is [1,3,3]', () => {
        const result = majorityElement([1,3,3]);
        expect(result).toBe(3);
    });
});