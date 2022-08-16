import { compareBooleans } from './compare-booleans';
import { compareBy } from './compare-by';
import type { Comparer } from './comparer';

// eslint-disable-next-line @typescript-eslint/ban-types
export function compareBooleansBy<T>(valueGetter: (value: T) => boolean | null | undefined): Comparer<T> {
    return compareBy(valueGetter, compareBooleans);
}
