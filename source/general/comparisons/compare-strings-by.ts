import { compareBy } from './compare-by';
import type { Comparer } from './comparer';
import { compareStrings } from './compare-strings';

export function compareStringsBy<T>(
    // eslint-disable-next-line @typescript-eslint/ban-types
    valueGetter: (value: T) => string | null | undefined,
    caseInsensitive: boolean = true
): Comparer<T> {
    return compareBy(valueGetter, (itemA, itemB) => compareStrings(itemA, itemB, caseInsensitive));
}
