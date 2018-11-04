import { isArray } from '../types';

export function remove<T>(array: T[], item: T): T[];
export function remove<T>(array: T[], items: T[]): T[];
export function remove<T>(array: T[], index: number, count?: number): T[];
export function remove<T>(array: T[], indexOrItemOrItems: number | T | T[], count: number = 1) {
    if (typeof indexOrItemOrItems === 'number') {
        array.splice(indexOrItemOrItems, count);
    } else if (isArray(indexOrItemOrItems)) {
        indexOrItemOrItems.forEach(item => remove(array, item));
    } else {
        const index = array.indexOf(indexOrItemOrItems);

        array.splice(index, 1);
    }

    return array;
}
