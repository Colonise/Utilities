import { compareBy } from './compare-by';
import { compareOrders } from './compare-orders';
import type { Comparer } from './comparer';

export function compareOrdersBy<T, T2>(
    // eslint-disable-next-line @typescript-eslint/ban-types
    valueGetter: (value: T) => T2 | null | undefined,
    order: T2[]
): Comparer<T> {
    return compareBy(valueGetter, (itemA, itemB) => compareOrders(itemA, itemB, order));
}
