import { compareNullOrUndefined } from './compare-null-or-undefined';
import { compareNumbers } from './compare-numbers';

export function compareOrders<T>(
    // eslint-disable-next-line @typescript-eslint/ban-types
    itemA: T | null | undefined,
    // eslint-disable-next-line @typescript-eslint/ban-types
    itemB: T | null | undefined,
    order: T[]
): number {
    // eslint-disable-next-line no-eq-null, eqeqeq
    if (itemA == null || itemB == null) {
        return compareNullOrUndefined(itemA, itemB);
    }

    return compareNumbers(
        order.indexOf(itemA),
        order.indexOf(itemB)
    );
}
