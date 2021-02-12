const totalCharacter = 26;
const halfNCharacter = totalCharacter / 2;

const canConvertString = (s: string, t: string, k: number): boolean => {
    if (s.length !== t.length) return false;

    let freq = Object.assign({});
    for (let i = 0; i < s.length; i++) {
        const count = countRotation(s[i], t[i]);
        if (count !== 0) {
            if (!freq[count]) {
                freq[count] = 0;
            }
            freq[count]++;
        }
    }

    const quotient = Math.floor(k / 26);
    const remainder = k % 26;

    console.log(freq)
    console.log(quotient, remainder)
    let result = true;
    Object.keys(freq).forEach(key => {
        const value = freq[key];
        if (value <= quotient) {
            // ok
        } else if (value === quotient + 1 && parseInt(key) <= remainder) {
            // ok
        } else {
            // no ->
            result = false;
        }
    })

    return result;
};

const getShift = (counter: number): number => {
    if (counter >= totalCharacter) {
        return counter - totalCharacter
    }
    return counter
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