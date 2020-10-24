// eslint-disable-next-line @typescript-eslint/ban-types
export function compareNullOrUndefined<T>(itemA: T | null | undefined, itemB: T | null | undefined): number {
    // eslint-disable-next-line no-eq-null, eqeqeq
    if (itemA == null && itemB != null) {
        return 1;
    }

    // eslint-disable-next-line no-eq-null, eqeqeq
    if (itemA != null && itemB == null) {
        return -1;
    }

    return 0;
}
