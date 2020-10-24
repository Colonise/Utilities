import { compareNullOrUndefined } from './compare-null-or-undefined';

export function compareStrings(
    // eslint-disable-next-line @typescript-eslint/ban-types
    itemA: string | null | undefined,
    // eslint-disable-next-line @typescript-eslint/ban-types
    itemB: string | null | undefined
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
