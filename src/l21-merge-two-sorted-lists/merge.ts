class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const l1array = convertListNodeToArray(l1);
    const l2array = convertListNodeToArray(l2);
    return convertArrayToListNode(mergeTwoArrays(l1array, l2array))
};
export const mergeTwoArrays = (l1: number[], l2: number[]) => {
    const output: number[] = []
    let l1Index = 0, l2Index = 0
    while (l1Index < l1.length && l2Index < l2.length) {
        if (l1[l1Index] < l2[l2Index]) {
            output.push(l1[l1Index])
            l1Index++;
        } else {
            output.push(l2[l2Index])
            l2Index++;
        }
    }

    if (l2Index === l2.length) {
        output.push(...l1.slice(l1Index))
    } else if (l1Index === l1.length) {
        output.push(...l2.slice(l2Index))
    }
    return output
}
export const convertListNodeToArray = (list: ListNode | null): number[] => {
    let head = list
    const array: number[] = [];
    while (head !== null) {
        array.push(head.val)
        head = head.next
    }
    return array;
}

export const convertArrayToListNode = (num: number[]): ListNode | null => {
    let tail = null
    for (let i = num.length - 1; i >= 0; i--) {
        tail = new ListNode(num[i], tail)
    }
    return tail;
}