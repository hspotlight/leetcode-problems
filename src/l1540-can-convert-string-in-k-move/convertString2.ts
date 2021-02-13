const nCharacters = 26;

const canConvertString2 = (s: string, t: string, k: number): boolean => {
    
    let result = [...s].map((_, i: number) => {
        return countRotate(s[i], t[i]) <= k;
    }).reduce((isConvertable, is) => isConvertable && is, true)

    return result
}

module.exports = {
    canConvertString2
};

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
