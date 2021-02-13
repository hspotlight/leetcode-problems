const totalCharacter = 26;
const halfNCharacter = totalCharacter / 2;

const canConvertString = (s: string, t: string, k: number): boolean => {
    if (s.length !== t.length) return false;

    const counts = [...s].map((_, index: number) => {
        return countRotation(s[index], t[index]);
    }).filter(n => n !== 0)

    let freq = getFreq(counts);

    const [quotient, remainder] = getQuotientAndRemainder(k, totalCharacter);

    let result = true;
    Object.keys(freq).forEach(key => {
        const value = freq[key];
        if ((value <= quotient) || (value === quotient + 1 && parseInt(key) <= remainder)) {
        } else {
            result = false;
        }
    })

    return result;
};

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

const countRotation = (a: string, b: string): number => {
    const charCodeA = a.charCodeAt(0);
    const charCodeB = b.charCodeAt(0);

    const diff = charCodeB - charCodeA;
    if (diff >= 0) {
        return diff
    }
    return totalCharacter + diff;
}

module.exports = {
    canConvertString,
    countRotation
};