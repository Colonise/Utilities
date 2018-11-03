import { Finder } from '../types';

export function findBy<T>(array: T[], finder: Finder<T>): T | undefined {
    for (let i = 0; i < array.length; i++) {
        if (finder(array[i], i, array)) {
            return array[i];
        }
    }

    return undefined;
}
