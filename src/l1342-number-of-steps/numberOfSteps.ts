
const stepMapping = Object.assign({});

export function numberOfSteps(num: number): number {
    if (num === 0) return 0;
    if (num === 1) return 1;
    else if (stepMapping[num]) return stepMapping[num];
    else {
        const successorNum = num % 2 === 1 ? num - 1 : Math.floor(num / 2)
        const answer = numberOfSteps(successorNum) + 1;
        stepMapping[num] = answer;
        return answer;
    }
};