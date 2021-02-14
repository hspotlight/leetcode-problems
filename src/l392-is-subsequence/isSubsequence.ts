export function isSubsequence(s: string, t: string): boolean {
    const dp: number[][] = []
    for (let i = 0; i <= s.length; i++) {
        dp.push([])
        for (let j = 0; j <= t.length; j++) {
            dp[i].push(0)
        }
    }

    for (let i = 1; i <= s.length; i++) {
        const sc = s[i - 1];
        for (let j = 1; j <= t.length; j++) {
            const tc = t[j - 1];
            if (sc === tc) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[s.length][t.length] == s.length
}