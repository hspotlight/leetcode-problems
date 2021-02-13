const convertString = require("./convertString")

describe('convert', () => {
    it('should return true when (s,t,k) is (a,a,1)', () => {
        const result = convertString.canConvertString('a', 'a', 1)
        expect(result).toBeTruthy()
    })
    it('should return true when (s,t,k) is (a,b,1)', () => {
        const result = convertString.canConvertString('a', 'b', 1)
        expect(result).toBeTruthy()
    })
    it('should return true when (s,t,k) is (a,c,2)', () => {
        const result = convertString.canConvertString('a', 'c', 2)
        expect(result).toBeTruthy()
    })
    it('should return true when (s,t,k) is (a,c,3)', () => {
        const result = convertString.canConvertString('a', 'c', 3)
        expect(result).toBeTruthy()
    })
    it('should return false when (s,t,k) is (a,c,1)', () => {
        const result = convertString.canConvertString('a', 'c', 1)
        expect(result).toBeFalsy()
    })
    it('should return false when (s,t,k) is (aa,ac,1)', () => {
        const result = convertString.canConvertString('aa', 'ac', 1)
        expect(result).toBeFalsy()
    })
    it('should return false when (s,t,k) is (input, output, 9)', () => {
        const result = convertString.canConvertString('input', 'output', 9)
        expect(result).toBeFalsy()
    })
    it('should return true when (s,t,k) is (input, ouput, 9)', () => {
        const result = convertString.canConvertString('input', 'ouput', 9)
        expect(result).toBeTruthy()
    })
    it('should return true when (s,t,k) is (aab, bbb, 27)', () => {
        const result = convertString.canConvertString('aab', 'bbb', 27)
        expect(result).toBeTruthy()
    })
    it('should return false when (s,t,k) is (abc, bcd, 10)', () => {
        const result = convertString.canConvertString('abc', 'bcd', 10)
        expect(result).toBeFalsy()
    })
    it('should return true when (s,t,k) is (mpzzwh, kaeblv, 24)', () => {
        const result = convertString.canConvertString('mpzzwh', 'kaeblv', 24)
        expect(result).toBeTruthy()
    })
    it('should return true when (s,t,k) is (qsxkjbfz, xyfirptk, 73)', () => {
        const result = convertString.canConvertString("qsxkjbfz", "xyfirptk", 73)
        expect(result).toBeTruthy()
    })
})

describe('countRotation', () => {
    it('should return 0 when given a and a', () => {
        const result = convertString.countRotation('a', 'a')
        expect(result).toBe(0)
    })
    it('should return 1 when given a and b', () => {
        const result = convertString.countRotation('a', 'b')
        expect(result).toBe(1)
    })
    it('should return 2 when given a and c', () => {
        const result = convertString.countRotation('a', 'c')
        expect(result).toBe(2)
    })
    it('should return 2 when given c and a', () => {
        const result = convertString.countRotation('c', 'a')
        expect(result).toBe(24)
    })
    it('should return 2 when given z and a', () => {
        const result = convertString.countRotation('z', 'a')
        expect(result).toBe(1)
    })
    it('should return 11 when given a and l', () => {
        const result = convertString.countRotation('a', 'l')
        expect(result).toBe(11)
    })
    it('should return 12 when given a and m', () => {
        const result = convertString.countRotation('a', 'm')
        expect(result).toBe(12)
    })
    it('should return 13 when given a and n', () => {
        const result = convertString.countRotation('a', 'n')
        expect(result).toBe(13)
    })
    it('should return 14 when given a and o', () => {
        const result = convertString.countRotation('a', 'o')
        expect(result).toBe(14)
    })
})