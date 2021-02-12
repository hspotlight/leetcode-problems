const totalCharacter = 26;
const halfNCharacter = totalCharacter / 2;

const canConvertString = (s: string, t: string, k: number): boolean => {
    if (s.length !== t.length) return false;

    let counts = []
    for (let i = 0; i < s.length; i++) {
        counts.push(countRotation(s[i], t[i]));
    }

    let useLeft = s.length;
    for (let shiftCount = 1, counter = 1; counter <= k; counter++, shiftCount++) {
        shiftCount = getShift(shiftCount);

        if (useLeft === 0) {
            break;
        }
        for (let i = 0; i < counts.length; i++) {
            if (counts[i] === shiftCount && shiftCount !== 0) {
                counts[i] = 0;
                useLeft--;
                break;
            }
        }
    }
    const sum = counts.reduce((sum, value) => sum + value, 0)
    return sum === 0;
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