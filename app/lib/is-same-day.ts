export function isSameDay(firstTimestamp: number, secondTimestamp: number) {

    const [d1, d2] = [new Date(firstTimestamp * 1000), new Date(secondTimestamp * 1000)]

    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}