import { Finder } from '../types';

export function findIndexBy<T>(array: T[], finder: Finder<T>): number {
    for (let i = 0; i < array.length; i++) {
        if (finder(array[i], i, array)) {
            return i;
        }
    }

    return -1;
}
