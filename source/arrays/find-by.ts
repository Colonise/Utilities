import { ArrayIterator } from '../types';

export function findBy<T>(array: T[], iterator: ArrayIterator<T>): T | undefined {
    for (let i = 0; i < array.length; i++) {
        if (iterator(array[i], i, array)) {
            return array[i];
        }
    }

    return undefined;
}
