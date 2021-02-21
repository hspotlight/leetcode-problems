import { canFinish, enterCourse } from "./canFinish";

describe('canFinish', () => {
    it('should return true when given 1, []', () => {
        const result = canFinish(1, [])
        expect(result).toBe(true);
    });
    it('should return true when given 2, []', () => {
        const result = canFinish(2, [])
        expect(result).toBe(true);
    });
});

describe('enterCourse', () => {
    it('should return 1 when given 1, []', () => {
        const result = enterCourse(1, [])
        expect(result).toBe(1);
    });
    it('should return 2 when given 2, []', () => {
        const result = enterCourse(2, [])
        expect(result).toBe(2);
    });
    it('should return 3 when given 3, []', () => {
        const result = enterCourse(3, [])
        expect(result).toBe(3);
    });
    it('should return 2 when given 2, [[0, 1]]', () => {
        const result = enterCourse(2, [[0, 1]])
        expect(result).toBe(2);
    });
    it('should return 2 when given 2, [[1, 0]]', () => {
        const result = enterCourse(2, [[1, 0]])
        expect(result).toBe(2);
    });
    it('should return 0 when given 2, [[0, 1], [1, 0]]', () => {
        const result = enterCourse(2, [[0, 1], [1, 0]])
        expect(result).toBe(0);
    });
    it('should return 3 when given 3, [[0, 1], [1, 2]]', () => {
        const result = enterCourse(3, [[0, 1], [1, 2]])
        expect(result).toBe(3);
    });
});