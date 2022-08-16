import type { Comparer } from './comparer';

export function compareBy<T, T2>(valueGetter: (value: T) => T2, comparer: Comparer<T2>): Comparer<T> {
    return (valueA: T, valueB: T) => comparer(valueGetter(valueA), valueGetter(valueB));
}
