import { floodFill } from "./floodFill";

describe('floodFill', () => {
    it('just itself', () => {
        const input = [
            [0, 2, 2],
            [2, 2, 2],
            [2, 2, 2]];
        const result = floodFill(input, 0, 0, 1)
        const expectedResult = [
            [1, 2, 2],
            [2, 2, 2],
            [2, 2, 2]];
        expect(result).toMatchObject(expectedResult)
    });
    it('just itself x 2', () => {
        const input = [
            [2, 0, 2],
            [2, 2, 2],
            [2, 2, 2]];
        const result = floodFill(input, 0, 1, 1)
        const expectedResult = [
            [2, 1, 2],
            [2, 2, 2],
            [2, 2, 2]];
        expect(result).toMatchObject(expectedResult)
    });
    it('just itself + right', () => {
        const input = [
            [2, 0, 0],
            [2, 2, 2],
            [2, 2, 2]];
        const result = floodFill(input, 0, 1, 1)
        const expectedResult = [
            [2, 1, 1],
            [2, 2, 2],
            [2, 2, 2]];
        expect(result).toMatchObject(expectedResult)
    });
    it('just itself + right 2', () => {
        const input = [
            [0, 0, 0],
            [2, 2, 2],
            [2, 2, 2]];
        const result = floodFill(input, 0, 0, 1)
        const expectedResult = [
            [1, 1, 1],
            [2, 2, 2],
            [2, 2, 2]];
        expect(result).toMatchObject(expectedResult)
    });
    it('just itself + left', () => {
        const input = [
            [0, 0, 0],
            [2, 2, 2],
            [2, 2, 2]];
        const result = floodFill(input, 0, 2, 1)
        const expectedResult = [
            [1, 1, 1],
            [2, 2, 2],
            [2, 2, 2]];
        expect(result).toMatchObject(expectedResult)
    });
    it('just itself + up', () => {
        const input = [
            [0, 2, 2],
            [0, 2, 2],
            [0, 2, 2]];
        const result = floodFill(input, 2, 0, 1)
        const expectedResult = [
            [1, 2, 2],
            [1, 2, 2],
            [1, 2, 2]];
        expect(result).toMatchObject(expectedResult)
    });
    it('just itself + down', () => {
        const input = [
            [0, 2, 2],
            [0, 2, 2],
            [0, 2, 2]];
        const result = floodFill(input, 0, 0, 1)
        const expectedResult = [
            [1, 2, 2],
            [1, 2, 2],
            [1, 2, 2]];
        expect(result).toMatchObject(expectedResult)
    });
    it('just 4 direction', () => {
        const input = [
            [2, 0, 2],
            [0, 0, 0],
            [2, 0, 2]];
        const result = floodFill(input, 1, 1, 1)
        const expectedResult = [
            [2, 1, 2],
            [1, 1, 1],
            [2, 1, 2]];
        expect(result).toMatchObject(expectedResult)
    });
    it('recursion', () => {
        const input = [
            [2, 0, 2],
            [0, 0, 0],
            [2, 0, 2]];
        const result = floodFill(input, 0, 1, 1)
        const expectedResult = [
            [2, 1, 2],
            [1, 1, 1],
            [2, 1, 2]];
        expect(result).toMatchObject(expectedResult)
    });
    it('fill all', () => {
        const input = [
            [0, 0, 0],
            [0, 0, 0]]
        const result = floodFill(input, 0, 0, 2)
        const expectedResult = [
            [2, 2, 2],
            [2, 2, 2]]
        expect(result).toMatchObject(expectedResult)
    });
    it('do nothing', () => {
        [[0, 0, 0], [0, 1, 1]]
        const input = [
            [0, 0, 0],
            [0, 1, 1]]
        const result = floodFill(input, 1, 1, 1)
        const expectedResult = [
            [0, 0, 0],
            [0, 1, 1]]
        expect(result).toMatchObject(expectedResult)
    });
});