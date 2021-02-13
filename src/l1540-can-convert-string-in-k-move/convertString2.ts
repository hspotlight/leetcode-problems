const nCharacters = 26;

const canConvertString2 = (s: string, t: string, k: number): boolean => {
    if (s.length !== t.length) return false

    let counts = [...s].map((_, i: number) => {
        return countRotate(s[i], t[i]);
    }).filter(n => n !== 0)

    const freq = getFreq2(counts)

    const [quotient, remainder] = getQuotientAndRemainder2(k, nCharacters);

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

module.exports = {
    canConvertString2
};

const getFreq2 = (numbers: number[]) => {
    const freq = Object.assign({})

    numbers.forEach(number => {
        if (!freq[number]) {
            freq[number] = 0;
        }
        freq[number]++;
    })

    return freq;
}

const getQuotientAndRemainder2 = (dividend: number, divisor: number): [number, number] => {
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
