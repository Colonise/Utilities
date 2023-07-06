import { compareNullOrUndefined } from './compare-null-or-undefined';
import { compareNumbers } from './compare-numbers';

export function compareDates(
    // eslint-disable-next-line @typescript-eslint/ban-types
    itemA: Date | number | string | null | undefined,
    // eslint-disable-next-line @typescript-eslint/ban-types
    itemB: Date | number | string | null | undefined
): number {
    // eslint-disable-next-line no-eq-null, eqeqeq
    if (itemA == null || itemB == null) {
        return compareNullOrUndefined(itemA, itemB);
    }

    return compareNumbers(new Date(itemA).valueOf(), new Date(itemB).valueOf());
}
