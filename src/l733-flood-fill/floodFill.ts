const directionI = [0, 0, -1, 1];
const directionJ = [1, -1, 0, 0];

let visited: boolean[][]

export function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    visited = []
    for (let i = 0; i < image.length; i++) {
        visited.push([])
        for (let j = 0; j < image[0].length; j++) {
            visited[i].push(false);
        }
    }
    updateFill(image, sr, sc, newColor);
    return image;
};

function updateFill(image: number[][], sr: number, sc: number, newColor: number) {
    const nRows = image.length;
    const nCols = image[0].length;
    if (!inRange(sr, nRows, sc, nCols)) {
        return
    }
    const myColor = image[sr][sc];
    image[sr][sc] = newColor;
    visited[sr][sc] = true;
    for (let d = 0; d < directionI.length; d++) {
        let newI = sr + directionI[d];
        let newJ = sc + directionJ[d];
        if (inRange(newI, nRows, newJ, nCols) && !visited[newI][newJ] && image[newI][newJ] === myColor) {
            updateFill(image, newI, newJ, newColor)
        }
    }
}

function inRange(newI: number, nRows: number, newJ: number, nCols: number) {
    return newI >= 0 && newJ >= 0 && newI < nRows && newJ < nCols;
}
