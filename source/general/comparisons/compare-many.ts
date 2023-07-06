import { compareNullOrUndefined } from './compare-null-or-undefined';
import type { Comparer } from './comparer';

export function compareMany<T>(comparers: Comparer<T>[]): Comparer<T> {
    return (itemA, itemB) => {
        // eslint-disable-next-line no-eq-null, eqeqeq
        if (itemA == null || itemB == null) {
            return compareNullOrUndefined(itemA, itemB);
        }

        for (const comparer of comparers) {
            const sorterResult = comparer(itemA, itemB);

            if (sorterResult !== 0) {
                return sorterResult;
            }
        }

        return 0;
    };
}
