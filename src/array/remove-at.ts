export function removeAt<T>(array: T[], index: number, count?: number): T[] {
    array.splice(index, count);

    return array;
}
