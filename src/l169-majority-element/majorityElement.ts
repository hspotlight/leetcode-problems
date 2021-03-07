export function majorityElement(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    const freq = nums.reduce((freq, num) => {
        if (!freq[num]) {
            freq[num] = 0;
        }
        freq[num]++;
        return freq;
    }, Object.assign({}));

    const majority = Object.keys(freq).reduce((majority, key) => {
        const count = freq[key];
        if (majority.count < count) {
            return {
                majority: +key,
                count: count
            }
        }
        return majority;
    }, { majority: 0, count: 0 })
    const atLeast = Math.floor(nums.length / 2);
    return (majority.count > atLeast) ? majority.majority : 0;
};