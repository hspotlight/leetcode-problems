import { countGoodRectangles } from './countGoodRectangle'
describe('countGoodRectangle', () => {
    it('should return 1 if has only one square with length 1', () => {
        const result = countGoodRectangles([[1, 1]])
        expect(result).toBe(1)
    })
    it('should return 2 if has only two square with length 1', () => {
        const result = countGoodRectangles([[1, 1], [1, 1,]])
        expect(result).toBe(2)
    })
    it('should return 3 if has only three square with length 1', () => {
        const result = countGoodRectangles([[1, 1], [1, 1], [1, 1]])
        expect(result).toBe(3)
    })
    it('should return 1 if has input is [1,1], [2,2]', () => {
        const result = countGoodRectangles([[1, 1], [2, 2]])
        expect(result).toBe(1)
    })
    it('should return 2 if has input is [1,1], [2,2] [2,2]', () => {
        const result = countGoodRectangles([[1, 1], [2, 2], [2, 2]])
        expect(result).toBe(2)
    })
    it('should return 3 if has input is [1,1], [1,2] [2, 1]', () => {
        const result = countGoodRectangles([[1, 1], [1, 2], [2, 1]])
        expect(result).toBe(3)
    })
})