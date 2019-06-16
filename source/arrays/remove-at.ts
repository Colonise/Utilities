export function removeAt<T>(array: T[], index: number, count: number = 1): T[] {
    array.splice(index, count);

    return array;
}
