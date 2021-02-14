const romanKey = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

export function romanToInt(s: string): number {
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        const current = s[i]
        if (i + 1 < s.length) {
            const next = s[i + 1]
            const currentIndex = romanKey.indexOf(current)
            const nextIndex = romanKey.indexOf(next)
            if (currentIndex < nextIndex) {
                sum -= mapRomanCharToInt(current)
            } else {
                sum += mapRomanCharToInt(current)
            }
        } else {
            sum += mapRomanCharToInt(current)
        }
    }
    return sum
};

function mapRomanCharToInt (s: string) {
    if (s[0] === 'M') return 1000
    if (s[0] === 'D') return 500
    if (s[0] === 'C') return 100
    if (s[0] === 'L') return 50
    if (s[0] === 'X') return 10
    if (s[0] === 'V') return 5
    return 1
}