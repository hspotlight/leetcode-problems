const totalStep: number[] = [];
totalStep.length = 46;

export function climbStairs(n: number): number {
    if (totalStep[n]) return totalStep[n];
    if (n === 1 || n === 2) return n;
    totalStep[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return totalStep[n];
};