import { compareBy } from './compare-by';
import { compareDates } from './compare-dates';
import type { Comparer } from './comparer';

// eslint-disable-next-line @typescript-eslint/ban-types
export function compareDatesBy<T>(valueGetter: (value: T) => Date | number | string | null | undefined): Comparer<T> {
    return compareBy(valueGetter, compareDates);
}
