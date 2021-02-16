export function countGoodRectangles(rectangles: number[][]): number {
    let count = 0;
    let maxLength = getSquareSide(rectangles[0]);
    for (let i = 0; i < rectangles.length; i++) {
        const squareSideLength = getSquareSide(rectangles[i]);
        if (squareSideLength === maxLength) {
            count++;
        } else if (squareSideLength > maxLength) {
            maxLength = squareSideLength;
            count = 1;
        }
    }
    return count;
};

function getSquareSide(rectangle: number[]): number {
    return Math.min(rectangle[0], rectangle[1])
}