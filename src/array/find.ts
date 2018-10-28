import { Finder } from '../types/finder';

export function find<T>(array: T[], item: T): T | undefined;
export function find<T>(array: T[], finder: Finder<T>): T | undefined;
export function find<T>(array: T[], itemOrFinder: T | Finder<T>) {
    const finder: Finder<T> =
        typeof itemOrFinder === 'function' ? <Finder<T>>itemOrFinder : item => item === itemOrFinder;

    for (let i = 0; i < array.length; i++) {
        if (finder(array[i], i, array)) {
            return array[i];
        }
    }

    return undefined;
}
