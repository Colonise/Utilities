import { compareBy } from './compare-by';
import { compareNumbers } from './compare-numbers';
import type { Comparer } from './comparer';

// eslint-disable-next-line @typescript-eslint/ban-types
export function compareNumbersBy<T>(valueGetter: (value: T) => number | null | undefined): Comparer<T> {
    return compareBy(valueGetter, compareNumbers);
}
