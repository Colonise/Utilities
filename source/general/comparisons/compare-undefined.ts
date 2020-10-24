export function compareUndefined<T>(itemA: T | undefined, itemB: T | undefined): number {
    if (itemA === undefined && itemB !== undefined) {
        return 1;
    }

    if (itemA !== undefined && itemB === undefined) {
        return -1;
    }

    return 0;
}
