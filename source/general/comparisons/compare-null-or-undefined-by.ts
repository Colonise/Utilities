import { compareBy } from './compare-by';
import { compareNullOrUndefined } from './compare-null-or-undefined';
import type { Comparer } from './comparer';

// eslint-disable-next-line @typescript-eslint/ban-types
export function compareNullOrUndefinedBy<T, T2>(valueGetter: (value: T) => T2 | null | undefined): Comparer<T> {
    return compareBy(valueGetter, compareNullOrUndefined);
}
