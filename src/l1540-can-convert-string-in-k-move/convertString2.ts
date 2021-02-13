const nCharacters = 26;
const canConvertString2 = (s: string, t: string, k: number): boolean => {
    
    let result = [...s].map((_, i: number) => {
        return canConvert(s[i], t[i], k);
    }).reduce((isConvertable, is) => isConvertable && is, true)

    return result
}

module.exports = {
    canConvertString2
};

function canConvert(s: string, t: string, k: number): boolean {
    let result;

    const first = s.charCodeAt(0);
    const second = t.charCodeAt(0);
    const diff = second - first;

    if (diff >= 0) {
        result = diff <= k;
    } else {
        const newDiff = nCharacters + diff;
        result = newDiff <= k;
    }

    return result;
}
