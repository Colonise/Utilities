import { ArrayEnumerator } from '../types';

export function findIndexBy<T>(array: T[], enumerator: ArrayEnumerator<T>): number {
    for (let i = 0; i < array.length; i++) {
        if (enumerator(array[i], i, array)) {
            return i;
        }
    }

    return -1;
}
