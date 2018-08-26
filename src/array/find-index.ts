import { Finder } from '../types/finder';

export function findIndex<T>(array: T[], item: T): number;
export function findIndex<T>(array: T[], finder: Finder<T>): number;
export function findIndex<T>(array: T[], itemOrFinder: T | Finder<T>) {
    const finder: Finder<T> = typeof itemOrFinder === 'function' ? itemOrFinder : item => item === itemOrFinder;

    for (let i = 0; i < array.length; i++) {
        if (finder(array[i], i, array)) {
            return i;
        }
    }

    return -1;
}
