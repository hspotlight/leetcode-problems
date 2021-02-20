export function readBinaryWatch(num: number): string[] {
    const possibleTime = [];
    for (let hour = 0; hour <= 11; hour++) {
        for (let minute = 0; minute <= 59; minute++) {
            if (count1s(hour) + count1s(minute) === num) {
                const time = getTime(hour, minute)
                possibleTime.push(time)
            }
        }
    }
    return possibleTime
}

function count1s(num: number): number {
    let count = 0;
    while (num > 0) {
        if ((num & 1) === 1) count++;
        num = num >> 1;
    }
    return count;
}

function getTime(hour: number, minute: number): string {
    return getHour(hour) + ":" + getMinute(minute)
}

function getMinute(num: number): string {
    const numString = num.toString();
    return numString.length === 2 ? numString : "0" + numString
}


function getHour(num: number): string {
    return num.toString()
}