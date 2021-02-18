import { climbStairs } from "./climbStairs";

describe('climbStairs', () => {
    it('should return 1 when given 1', () => {
        const result = climbStairs(1)
        expect(result).toBe(1);
    });
    it('should return 2 when given 2', () => {
        const result = climbStairs(2)
        expect(result).toBe(2);
    });
    it('should return 3 when given 3', () => {
        const result = climbStairs(3)
        expect(result).toBe(3);
    });
    it('should return 5 when given 4', () => {
        const result = climbStairs(4)
        expect(result).toBe(5);
    });
    it('should return 8 when given 5', () => {
        const result = climbStairs(5)
        expect(result).toBe(8);
    });
    it('should return 13 when given 6', () => {
        const result = climbStairs(6)
        expect(result).toBe(13);
    });
});