import type { Comparer } from './comparer';

export function reverseComparer<T>(comparer: Comparer<T>): Comparer<T> {
    return (valueA: T, valueB: T) => -comparer(valueA, valueB);
}
