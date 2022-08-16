import { compareBy } from './compare-by';
import { compareNull } from './compare-null';
import type { Comparer } from './comparer';

// eslint-disable-next-line @typescript-eslint/ban-types
export function compareNullBy<T, T2>(valueGetter: (value: T) => T2 | null): Comparer<T> {
    return compareBy(valueGetter, compareNull);
}
