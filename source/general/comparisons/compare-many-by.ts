import { compareBy } from './compare-by';
import { compareMany } from './compare-many';
import type { Comparer } from './comparer';

// eslint-disable-next-line @typescript-eslint/ban-types
export function compareManyBy<T, T2>(valueGetter: (value: T) => T2 | null | undefined, comparers: Comparer<T2>[]): Comparer<T> {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return compareBy<T, T2 | null | undefined>(
        valueGetter,
        // eslint-disable-next-line @typescript-eslint/ban-types
        (valueA: T2 | null | undefined, valueB: T2 | null | undefined) => compareMany<T2>(valueA, valueB, comparers)
    );
}
