import { compareBy } from './compare-by';
import type { Comparer } from './comparer';
import { compareUndefined } from './compare-undefined';

export function compareUndefinedBy<T, T2>(valueGetter: (value: T) => T2 | undefined): Comparer<T> {
    return compareBy(valueGetter, compareUndefined);
}
