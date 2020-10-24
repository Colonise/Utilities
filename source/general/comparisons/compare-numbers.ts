import { compareNullOrUndefined } from './compare-null-or-undefined';

export function compareNumbers(
    // eslint-disable-next-line @typescript-eslint/ban-types
    itemA: number | null | undefined,
    // eslint-disable-next-line @typescript-eslint/ban-types
    itemB: number | null | undefined
): number {
    // eslint-disable-next-line no-eq-null, eqeqeq
    if (itemA == null || itemB == null) {
        return compareNullOrUndefined(itemA, itemB);
    }

    if (itemA < itemB) {
        return -1;
    }

    if (itemA > itemB) {
        return 1;
    }

    return 0;
}
