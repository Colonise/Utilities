import { compareNullOrUndefined } from './compare-null-or-undefined';

type Comparer<T> = (itemA: T, itemB: T) => number;

// eslint-disable-next-line @typescript-eslint/ban-types
export function compareMany<T>(itemA: T | null | undefined, itemB: T | null | undefined, comparers: Comparer<T>[]): number {
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
}
