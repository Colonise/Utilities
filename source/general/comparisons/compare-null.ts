// eslint-disable-next-line @typescript-eslint/ban-types
export function compareNull<T>(itemA: T | null, itemB: T | null): number {
    if (itemA === null && itemB !== null) {
        return 1;
    }

    if (itemA !== null && itemB === null) {
        return -1;
    }

    return 0;
}
