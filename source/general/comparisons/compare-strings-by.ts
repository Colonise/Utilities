import { compareBy } from './compare-by';
import type { Comparer } from './comparer';
import { compareStrings } from './compare-strings';

// eslint-disable-next-line @typescript-eslint/ban-types
export function compareStringsBy<T>(valueGetter: (value: T) => string | null | undefined): Comparer<T> {
    return compareBy(valueGetter, compareStrings);
}
