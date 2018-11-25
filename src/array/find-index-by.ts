import { ArrayIterator } from '../types';

export function findIndexBy<T>(array: T[], iterator: ArrayIterator<T>): number {
    for (let i = 0; i < array.length; i++) {
        if (iterator(array[i], i, array)) {
            return i;
        }
    }

    return -1;
}
