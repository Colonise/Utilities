import { compareBy } from './compare-by';
import { compareMany } from './compare-many';
import type { Comparer } from './comparer';

export function compareManyBy<T, T2>(valueGetter: (value: T) => T2, comparers: Comparer<T2>[]): Comparer<T> {
    return compareBy(valueGetter, compareMany(comparers));
}
