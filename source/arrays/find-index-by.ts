import type { ArrayEnumerator } from '../types/array-enumerator';

export function findIndexBy<T>(array: T[], enumerator: ArrayEnumerator<T>): number {
    for (let i = 0; i < array.length; i++) {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (enumerator(array[i], i, array)) {
            return i;
        }
    }

    return -1;
}
