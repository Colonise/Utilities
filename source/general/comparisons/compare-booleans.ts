import { compareNullOrUndefined } from './compare-null-or-undefined';

export function compareBooleans(
    itemA: boolean | undefined,
    itemB: boolean | undefined
): number {
    // eslint-disable-next-line no-eq-null, eqeqeq
    if (itemA == null || itemB == null) {
        return compareNullOrUndefined(itemA, itemB);
    }

    if (!itemA && itemB) {
        return -1;
    }

    if (itemA && !itemB) {
        return 1;
    }

    return 0;
}
