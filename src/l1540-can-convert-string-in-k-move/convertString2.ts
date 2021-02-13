const nCharacters = 26;

export const canConvertString = (s: string, t: string, k: number): boolean => {
    if (s.length !== t.length) return false

    let counts = [...s].map((_, i: number) => {
        return countRotate(s[i], t[i]);
    }).filter(n => n !== 0)

    const freq = getFreq(counts)

    const [quotient, remainder] = getQuotientAndRemainder(k, nCharacters);

    let result = true;
    Object.keys(freq).forEach(key => {
        const count = +key
        const freqValue = freq[key]
        const quotientCase = freqValue <= quotient
        const remainderCase = (freqValue === quotient + 1 && count <= remainder);
        result = result && (quotientCase || remainderCase)
    })
    return result
}

const getFreq = (numbers: number[]) => {
    const freq = Object.assign({})

    numbers.forEach(number => {
        if (!freq[number]) {
            freq[number] = 0;
        }
        freq[number]++;
    })

    return freq;
}

const getQuotientAndRemainder = (dividend: number, divisor: number): [number, number] => {
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return [quotient, remainder]
}

function countRotate(s: string, t: string): number {
    let count;

    const first = s.charCodeAt(0);
    const second = t.charCodeAt(0);
    const diff = second - first;
    if (diff >= 0) {
        count = diff;
    } else {
        const newDiff = nCharacters + diff;
        count = newDiff;
    }

    return count;
}
